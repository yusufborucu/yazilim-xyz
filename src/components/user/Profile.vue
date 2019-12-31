<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2 text-center">        
        <img :src="getUser.image != null ? this.api_url + getUser.image : '../../dist/profile.png'" height="120" width="120">      
      </div>
      <div class="col-md-6">
        <p class="username mt-3"><strong>{{ getUser.username }}</strong></p>
        <span class="user-feature">{{ getUser.question_count }} Soru <i class="fas fa-question"></i></span>
        <span class="user-feature">{{ getUser.answer_count }} Cevap <i class="fas fa-wrench"></i></span>
        <span class="user-feature">{{ getUser.score }} Oy <i class="fas fa-check"></i></span>
      </div>
      <div class="col-md-4 d-flex align-items-center">
        <button class="btn btn-primary" data-toggle="modal" data-target="#profileModal"><i class="fas fa-cog mr-2"></i>Profil Düzenle</button>
      </div>
    </div>
    <hr/>
    <div class="row">
      <div class="col-md-12">
        <h4>Hakkında</h4>
        <p v-if="getUser.about == null || getUser.about == 'null'">Henüz hakkında yazınız yok. Profil Düzenle butonuna basarak hakkında yazınızı girebilirsiniz.</p>
        <p v-else>{{ getUser.about }}</p>
      </div>
    </div>
    <hr/>
    <div class="modal fade" id="profileModal" tabindex="-1" role="dialog" aria-labelledby="profileModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="profileModalLabel">Profil Düzenle</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="onSubmit">
            <div class="modal-body">            
              <div class="form-group">
                <div class="image-upload">
                  <label for="file-input">
                    <img :src="selectedFile != null ? selectedFile : '../../dist/profile.png'" height="120" width="120">
                  </label>
                  <input id="file-input" type="file" @change="onFileSelected" />
                </div>
              </div>
              <div class="form-group">
                <label for="about">Hakkında</label>
                <textarea v-model="about" class="form-control" id="about" placeholder="Hakkında yazınızı giriniz"></textarea>
              </div>            
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Vazgeç</button>
              <button type="submit" class="btn btn-primary">Kaydet</button>
            </div>
          </form>
        </div>
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
        api_url: "",
        image: null,
        editAbout: ""
      }
    },
    created() {
      this.$store.dispatch("profile");
      this.api_url = API_URL; 
    },
    computed: {
      ...mapGetters(["getUser"]),
      about : {
        get() {
          return this.getUser.about;
        },
        set(value) {
          this.editAbout = value;
        }
      },
      selectedFile : {
        get() {
          if (this.image != null) {
            return URL.createObjectURL(this.image);
          } else if (this.getUser.image == null) {
            return null;
          } else {
            return this.api_url + this.getUser.image;
          }
        },
        set(value) {

        }
      }
    },
    methods: {
      onFileSelected(e) {
        this.image = e.target.files[0];
      },
      onSubmit() {
        const formData = new FormData();
        formData.append('_method', 'PUT');
        if (this.editAbout == "") {
          this.editAbout = this.getUser.about;
        }
        formData.append('about', this.editAbout);
        formData.append('image', this.image);        
        this.$store.dispatch("update_profile", formData)
          .then(response => {
            $('#profileModal').modal('toggle');
            this.$store.dispatch("profile");
          });        
      }
    }
  }
</script>