<template>
  <div class="right-content">
    <div class="row">
      <div class="col-md-12">
        <aside class="sidebar mb-5">
          <h4 class="sidebar-title">En İyiler</h4>
          <ul class="user-list">
            <li 
              v-bind:key="user.id"
              v-for="user in getQuestions.best">
              <router-link :to="{ path: '/user-detail/' + user.id }" tag="a">
                <img class="avatar" :src="user.image != null ? this.api_url + user.image : '../../dist/profile.png'" width="16px" height="16px">
                <span class="username">{{ user.username }}</span>
                <span class="count">{{ user.score }}</span>
              </router-link>
            </li>
          </ul>
          <router-link to="/all-best" tag="a" class="more-link">
            Tümünü gör
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 185.343 185.343" style="enable-background:new 0 0 185.343 185.343;" xml:space="preserve">
              <path style="fill:#3b648e;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
              l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
              c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"/>
            </svg>
          </router-link>
        </aside>
        <aside class="sidebar sidebar-tags">
          <h4 class="sidebar-title">Popüler Etiketler</h4>
          <ul class="tag-list">
            <li 
              v-bind:key="tag.id"
              v-for="tag in getQuestions.popular_tags">
              <router-link :to="{ path: '/tag-detail/' + tag.tag }" tag="a">{{ tag.tag }}</router-link><small class="count">{{ tag.total }}</small>
            </li>
          </ul>
          <router-link to="/all-tags" tag="a" class="more-link">
            Tümünü gör
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 185.343 185.343" style="enable-background:new 0 0 185.343 185.343;" xml:space="preserve">
              <path style="fill:#3b648e;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
              l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
              c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"/>
            </svg>
          </router-link>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    computed: {
			...mapGetters(["getQuestions"])
		}
  }
</script>