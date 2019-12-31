<template>
	<section class="content">	
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="content-cols">
              <app-left-sidebar></app-left-sidebar>
              <div class="center-content">
                <div class="row">
                  <div class="col-md-12">
                    <div class="d-flex justify-content-between">
                      <h4 class="section-title mb-0">Son Sorular</h4>
											<router-link to="/ask-question" tag="a" class="add-link">
												<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                           viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
                          <path d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M24,18h-6v6h-4v-6H8v-4
                                h6V8h4v6h6V18z"/>
                        </svg>
												Soru Sor
											</router-link>	
                    </div>
                    <div class="questions">
                      <div 
												v-bind:key="question.id"
												v-for="question in getQuestions.last_questions" 
												class="question">
                        <div class="question-left">
                          <div class="count answer"><span>{{ question.answer_count }}</span><small>cevap</small></div>
                          <div class="count view"><span>{{ question.reading }}</span><small>okuma</small></div>
                        </div>
                        <div class="question-center">
													<router-link :to="{ path: 'question-detail/' + question.id }" tag="a" class="question-title">
														{{ question.title }}
													</router-link>
                          <p class="question-description" v-html="question.description"></p>
													<div class="d-flex">
														<div class="tags">
															<ul class="tag-list">
																<li 
																	v-bind:key="tag.id"
																	v-for="tag in question.tags">
                                  <router-link :to="{ path: 'tag-detail/' + tag.tag }" tag="a">{{ tag.tag }}</router-link>
                                </li>
															</ul>
														</div>
														<div class="author-date">
                              <router-link :to="{ path: 'user-detail/' + question.user.id }" tag="a">															
																<img :src="question.user.image != null ? api_url + question.user.image : '../../dist/profile.png'" height="16px" width="16px">
																<span class="username">{{ question.user.username }}</span>
                              </router-link>
															<br>
															<span class="date">{{ question.date }}</span>
														</div>
													</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <app-right-sidebar></app-right-sidebar>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
	import { mapGetters } from "vuex";
  import { API_URL } from "../../config/env";
  import LeftSidebar from "../shared/LeftSidebar";
  import RightSidebar from "../shared/RightSidebar";

	export default {
    components: {
      appLeftSidebar: LeftSidebar,
      appRightSidebar: RightSidebar
    },
		data() {
			return {
				api_url: ""
			}
		},
		created() {
			this.$store.dispatch("last_questions");
      this.api_url = API_URL;			
      if (localStorage.getItem('user_id') != null) {
        this.$socket.emit('con_user_id', localStorage.getItem('user_id'));
      }
		},
		computed: {
			...mapGetters(["getQuestions"])
		}
	}
</script>