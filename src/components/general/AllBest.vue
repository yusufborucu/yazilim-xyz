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
                      <h4 class="section-title mb-0">Tüm En İyiler</h4>
											<router-link to="/ask-question" tag="a" class="add-link">
												<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                           viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
                          <path d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M24,18h-6v6h-4v-6H8v-4
                                h6V8h4v6h6V18z"/>
                        </svg>
												Soru Sor
											</router-link>	
                    </div>
                    <div>
                      <ul class="user-list">
                        <li 
                          v-bind:key="user.id"
                          v-for="user in getAllBest">
                          <router-link :to="{ path: 'user-detail/' + user.id }" tag="a">
                            <img class="avatar" :src="user.image != null ? this.api_url + user.image : '../../dist/profile.png'" width="16px" height="16px">
                            <span class="username">{{ user.username }}</span>
                            <span class="count">{{ user.score }}</span>
                          </router-link>
                        </li>
                      </ul>
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
			this.$store.dispatch("all_best");
			this.api_url = API_URL;			
		},
		computed: {
			...mapGetters(["getAllBest"])
		}
	}
</script>