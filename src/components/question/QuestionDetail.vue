<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="question-detail-title">
          <h2>{{ getQuestion.title }}</h2>
          <div class="operations" v-if="user_id == getQuestion.user_id">
            <router-link :to="{ path: '/edit-question/' + getQuestion.id }" tag="a">Düzenle</router-link>
            <a href="#" @click="removeQuestion(getQuestion.id)">Sil</a>
          </div>
          <div class="infos">
            <span class="border p-2">{{ getQuestion.answer_count }} cevap</span>
            <span class="border p-2">{{ getQuestion.reading }} okunma</span>
          </div>
        </div>
        <hr/>
      </div>
    </div>    
    <div class="row">
      <div class="col-md-8">
        <p v-html="getQuestion.description"></p>
      </div>     
    </div>    
    <div class="row">
      <div class="col-md-8">
        <br/>
        <div class="author-date">
          <img :src="getQuestion.user.image != null ? this.api_url + getQuestion.user.image : '../../dist/profile.png'" height="30" width="30">
          <span>{{ getQuestion.user.username }}</span>
          <br/>
          <span class="date">{{ getQuestion.date }}</span>
        </div>
        <div class="tags">
          <span 
            class="border p-1 mr-1" 
            v-bind:key="tag.id"
            v-for="tag in getQuestion.tags"><a href="#">{{ tag.tag }}</a></span>
        </div>
        <br/>
        <hr/>
      </div>
    </div>         
    <div class="row">
      <div class="col-md-8">
        <h3>Cevaplar</h3>
        <hr/>
        <div 
          v-bind:key="answer.id"
          v-for="answer in getQuestion.answers">
          <p v-html="answer.answer"></p>
          <br/>
          <div class="author-date">
            <img :src="answer.user.image != null ? api_url + answer.user.image : '../../dist/profile.png'" height="30" width="30">
            <span>{{ answer.user.username }}</span>
            <br/>
            <span class="date">{{ answer.date }}</span>
          </div>   
          <div v-if="user_id != null && answer.user_id != user_id">
            <button class="vote" :class="successButton(answer)" @click="vote(answer.id, true)"><i class="fas fa-check"></i></button>
            <span class="vote-count">{{ answer.score }}</span>
            <button class="vote" :class="dangerButton(answer)" @click="vote(answer.id, false)"><i class="fas fa-times"></i></button>
          </div>
          <div style="min-height: 38px;" v-else>
          </div>
          <div class="answer-operations" v-if="user_id == answer.user_id">
            <a @click="editAnswer(answer.answer, answer.id)">Düzenle</a>
            <a href="#" @click="removeAnswer(answer.id)">Sil</a>
          </div>
          <hr/>
        </div>                        
      </div>
    </div>        
    <div class="row">
      <div class="col-md-8">
        <h3>Cevap Yaz</h3>
        <form @submit.prevent="onSubmit">
				  <div class="form-group">
						<vue-editor v-model="answer"></vue-editor>
            <small v-if="!$v.answer.required" class="form-text text-danger">Bu alan zorunludur.</small>
				  </div>
				  <div class="text-center">
				  	<button type="submit" class="btn btn-success" :disabled="$v.$invalid">Cevap Yaz</button>
				  </div>
				</form>
      </div>
    </div>
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="loginModalLabel">Giriş Yap</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="onLoginModalSubmit" class="login-form">
            <div class="modal-body">            
              <div class="form-group">
                <label for="email">E-posta Adresi</label>
                <input v-model="user.email" type="email" class="form-control" id="email" placeholder="E-posta adresinizi giriniz">
              </div>
              <div class="form-group">
                <label for="password">Parola</label>
						    <input v-model="user.password" type="password" class="form-control" id="password" placeholder="Parolanızı giriniz">
              </div>         
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Vazgeç</button>
              <button type="submit" class="btn btn-success">Giriş Yap</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { mapGetters } from "vuex";
  import { API_URL } from "../../config/env";
  import { VueEditor } from "vue2-editor";
  import { required } from "vuelidate/lib/validators";
  import hljs from 'highlight.js';
  
  export default {
    components: {
			VueEditor
		},
    data() {
      return {
        api_url: "",
        answer: "",
        saveButtonClicked: false,
        editButtonClicked: false,
        editAnswerId: 0,
        user: {
					email: "",
          password: ""
				}
      }
    },
    validations: {
			answer: {
        required
      }
		},
    created() {
      this.$store.dispatch("question_detail", { id: this.$route.params.id })
        .then(response => {
          setTimeout(() => {
            document.querySelectorAll('code').forEach((block) => {
              hljs.highlightBlock(block);
            });
          }, 1000);          
        });
      this.api_url = API_URL;
    },
    computed: {
      ...mapGetters(["getQuestion"]),
      user_id() {
        return localStorage.getItem("user_id");
      }
    },
    methods: {
      onSubmit() {
        if (this.$store.getters.isAuthenticated) {
          if (this.editButtonClicked) {
            let data = {
              id: this.editAnswerId,
              question_id: this.$route.params.id,
              answer: this.answer
            };
            this.$store.dispatch("edit_reply", { ...data });
          } else {
            this.saveButtonClicked = true;
            let data = {              
              question_id: this.$route.params.id,
              answer: this.answer
            };
            this.$store.dispatch("reply", { ...data });
            let que_user = {
              user_id: this.getQuestion.user_id,
              title: this.getQuestion.title
            };
            this.$socket.emit('que_user', que_user);
          }
          this.answer = "";
        } else {
          $('#loginModal').modal('toggle');
        }
      },  
      onLoginModalSubmit() {
        this.$store.dispatch("login", { ...this.user, question_id: this.$route.params.id, answer: this.answer })
          .then(response => {
            setTimeout(() => {
              if (this.$store.getters.isAuthenticated) {
                $('#loginModal').modal('toggle');
              }
            }, 2000);            
          });
      },
      vote(answer_id, status) {
        let data = {
          question_id: this.$route.params.id,
          answer_id,
          status
        };
        this.$store.dispatch("vote", { ...data });
      },
      successButton(answer) {
        let user_id = this.user_id;
        var exist = answer.scores.filter(function(item) {
          return item.user_id == user_id;
        });
        if (exist.length == 0) {
          return 'btn btn-outline-success';
        } else {
          return {
            'btn btn-success': exist[0].status == 1,
            'btn btn-outline-success': exist[0].status == 0
          }
        }
      },
      dangerButton(answer) {
        let user_id = this.user_id;
        var exist = answer.scores.filter(function(item) {
          return item.user_id == user_id;
        });
        if (exist.length == 0) {
          return 'btn btn-outline-danger';
        } else {
          return {
            'btn btn-danger': exist[0].status == 0,
            'btn btn-outline-danger': exist[0].status == 1
          }
        }
      },
      removeQuestion(id) {
        if (confirm("Bu soruyu silmek istediğinize emin misiniz?")) {
          this.$store.dispatch("remove_question", { id });
				} 
      },
      editAnswer(answer, id) {
        this.editButtonClicked = true;
        this.answer = answer;
        this.editAnswerId = id;
      },
      removeAnswer(id) {
        if (confirm("Bu cevabı silmek istediğinize emin misiniz?")) {
          this.$store.dispatch("remove_answer", { id, question_id: this.$route.params.id });
				} 
      }
    }
  }
</script>