<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <br/><br/>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from "./components/shared/Header";
  import Footer from "./components/shared/Footer";

  export default {
    components: {
      appHeader: Header,
      appFooter: Footer
    },
    created() {
      this.$store.dispatch("initAuth");
    }
  }
</script>

<style>
  body {
    background-color: #ecf0f1!important;
    font-family: 'Roboto', sans-serif!important;
  }

  footer {
    /*position: fixed;*/
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #343a40;
    color: white;
    text-align: center;
  }

  .login-form {
    border: 1px solid #95a5a6;
    border-radius: 5px;
    padding: 10px;
  }

  .forgot-password {
    float: right;
  }

  .card {
    margin-bottom: 10px;
  }

  .tags span a {
    text-decoration: none;
  }

  .infos {
    float: right;
    margin-top: -50px;
    font-size: small;
  }

  .author-date {
    float: right;
  }
  .author-date .date {
    font-size: small;
    float: right;
  }

  .top-rated {
    border: 1px solid #95a5a6;
      border-radius: 5px;
      padding: 10px;
  }

  .popular-tags {
    border: 1px solid #95a5a6;
      border-radius: 5px;
      padding: 10px;
  }  

  .quillWrapper {
    background: white;
  }

  .username {
    font-size: 20px;
  }
  
  .user-feature {
    border: 1px solid #343a40;
    border-radius: 5px;
    padding: 10px;
  }

  .image-upload > input {
    display: none;
  }

  .image-upload > label > img:hover {
    transform: scale(1.1);
  }

  .card-title > a {
    text-decoration: none;
  }

  pre {
    background-color: #343a40;
    color: #fff;
    padding: 10px;
  }

  .vote {
    min-width: 50px;
  }

  .vote-count {
    margin: 10px;
  }
</style>