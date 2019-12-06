<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <h2>{{ getQuestion.title }}</h2>
        <div class="infos">
          <span class="border p-2">{{ getQuestion.answer_count }} cevap</span>
          <span class="border p-2">{{ getQuestion.reading }} okunma</span>
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
          <div>
            <button class="btn btn-outline-success vote"><i class="fas fa-check"></i></button>
            <span class="vote-count">0</span>
            <button class="btn btn-outline-danger vote"><i class="fas fa-times"></i></button>
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
				  </div>
				  <div class="text-center">
				  	<button type="submit" class="btn btn-success" :disabled="saveEnabled">Cevap Yaz</button>
				  </div>
				</form>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import { API_URL } from "../../config/env";
  import { VueEditor } from "vue2-editor";
  
  export default {
    components: {
			VueEditor
		},
    data() {
      return {
        api_url: "",
        answer: "",
        saveButtonClicked: false
      }
    },
    created() {
      this.api_url = API_URL;
      this.$store.dispatch("question_detail", { id: this.$route.params.id });
    },
    computed: {
      ...mapGetters(["getQuestion"]),
      saveEnabled() {
				if (this.answer.length > 0) {
					return false;
				} else {
					return true;
				}
			}
    },
    methods: {
      onSubmit() {
        this.saveButtonClicked = true;
        let data = {
          question_id: this.$route.params.id,
          answer: this.answer
        };
				this.$store.dispatch("reply", { ...data });
      }
    }
  }
</script>