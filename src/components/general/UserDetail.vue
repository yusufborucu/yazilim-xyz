<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2 text-center">        
        <img :src="getUserDetail.image != null ? this.api_url + getUserDetail.image : '../../dist/profile.png'" height="120" width="120">      
      </div>
      <div class="col-md-6">
        <p class="username mt-3"><strong>{{ getUserDetail.username }}</strong></p>
        <span class="user-feature">{{ getUserDetail.question_count }} Soru <i class="fas fa-question"></i></span>
        <span class="user-feature">{{ getUserDetail.answer_count }} Cevap <i class="fas fa-wrench"></i></span>
        <span class="user-feature">{{ getUserDetail.score }} Oy <i class="fas fa-check"></i></span>
      </div>
    </div>
    <hr/>
    <div class="row">
      <div class="col-md-12">
        <h4>Hakkında</h4>
        <p>{{ getUserDetail.about }}</p>
      </div>
    </div>
    <hr/>
    <div class="row">
      <div class="col-md-4">
        <h4>Son Sorular</h4>
        <ul>
          <li>Soru başlığı</li>
          <li>Soru başlığı</li>
          <li>Soru başlığı</li>
        </ul>
      </div>
      <div class="col-md-4">
        <h4>Son Cevaplar</h4>
        <ul>
          <li>Soru başlığı</li>
          <li>Soru başlığı</li>
          <li>Soru başlığı</li>
        </ul>
      </div>
      <div class="col-md-4">
        <h4>Son Oylar</h4>
        <ul>
          <li>Soru başlığı</li>
          <li>Soru başlığı</li>
          <li>Soru başlığı</li>
        </ul>
      </div>
    </div>
  </div>
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
      this.$store.dispatch("user_detail", { id: this.$route.params.id });
      this.api_url = API_URL; 
    },
    computed: {
      ...mapGetters(["getUserDetail"])
    }
  }
</script>