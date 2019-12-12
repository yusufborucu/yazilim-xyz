<template>
	<section class="content">	
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="content-cols">
              <div class="left-content">
                <aside class="sidebar sidebar-tags">
                  <h4 class="sidebar-title">Son Etiketler</h4>
                  <ul class="tag-list">
                    <li><a href="#">angular</a><small class="count">1903</small></li>
                    <li><a href="#">laravel</a><small class="count">1597</small></li>
                    <li><a href="#">vue</a><small class="count">1387</small></li>
                    <li><a href="#">css</a><small class="count">974</small></li>
                    <li><a href="#">nodejs</a><small class="count">973</small></li>
                    <li><a href="#">typescript</a><small class="count">476</small></li>
                    <li><a href="#">c#</a><small class="count">289</small></li>
                  </ul>
                  <a href="#" class="more-link">
                    Tümünü gör
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 185.343 185.343" style="enable-background:new 0 0 185.343 185.343;" xml:space="preserve">
                      <path style="fill:#3b648e;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                      l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                      c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"/>
                    </svg>
                  </a>
                </aside>
              </div>
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
												v-for="question in getQuestions" 
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
																	v-for="tag in question.tags"><a href="#">{{ tag.tag }}</a></li>
															</ul>
														</div>
														<div class="author-date">
															<a href="#">
																<img :src="question.user.image != null ? api_url + question.user.image : '../../dist/profile.png'" height="16px" width="16px">
																<span class="username">{{ question.user.username }}</span>
															</a>
															<br>
															<span class="date">{{ question.date }}</span>
														</div>
													</div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <nav aria-label="...">
                          <ul class="pagination justify-content-center">
                            <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">Önceki Sayfa</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item active" aria-current="page"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Sonraki Sayfa</a></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="right-content">
                <div class="row">
                  <div class="col-md-12">
                    <aside class="sidebar mb-5">
                      <h4 class="sidebar-title">En İyiler</h4>
                      <ul class="user-list">
                        <li>
                          <a href="#">
                            <img class="avatar" src="src/assets/svg/avatar.svg" width="16px" height="16px">
                            <span class="username">yusufborucu</span>
                            <span class="count">21</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img class="avatar" src="src/assets/svg/avatar.svg" width="16px" height="16px">
                            <span class="username">xkobacik</span>
                            <span class="count">16</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img class="avatar" src="https://avatars2.githubusercontent.com/u/16652871?s=460&v=4" width="16px" height="16px">
                            <span class="username">MehmetSert</span>
                            <span class="count">11</span>
                          </a>
                        </li>
                      </ul>
                      <a href="#" class="more-link">
                        Tümünü gör
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 185.343 185.343" style="enable-background:new 0 0 185.343 185.343;" xml:space="preserve">
                          <path style="fill:#3b648e;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                          l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                          c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"/>
                        </svg>
                      </a>
                    </aside>
                    <aside class="sidebar sidebar-tags">
                      <h4 class="sidebar-title">Popüler Etiketler</h4>
                      <ul class="tag-list">
                        <li><a href="#">angular</a><small class="count">1903</small></li>
                        <li><a href="#">laravel</a><small class="count">1597</small></li>
                        <li><a href="#">vue</a><small class="count">1387</small></li>
                        <li><a href="#">css</a><small class="count">974</small></li>
                        <li><a href="#">nodejs</a><small class="count">973</small></li>
                        <li><a href="#">typescript</a><small class="count">476</small></li>
                        <li><a href="#">c#</a><small class="count">289</small></li>
                      </ul>
                      <a href="#" class="more-link">
                        Tümünü gör
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 185.343 185.343" style="enable-background:new 0 0 185.343 185.343;" xml:space="preserve">
                          <path style="fill:#3b648e;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                          l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                          c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"/>
                        </svg>
                      </a>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
	import { mapGetters } from "vuex";
	import { API_URL } from "../../config/env";

	export default {
		data() {
			return {
				api_url: ""
			}
		},
		created() {
			this.$store.dispatch("last_questions");
			this.api_url = API_URL;			
		},
		computed: {
			...mapGetters(["getQuestions"])
		}
	}
</script>