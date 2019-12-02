<template>
  <div class="container">
		<div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h1>Soru Sor</h1>
        <form @submit.prevent="onSubmit">
				  <div class="form-group">
				    <label for="title">Başlık</label>
				    <input v-model="question.title" type="text" class="form-control" id="title" placeholder="Sorunun başlığını giriniz" maxlength="65">
				  </div>
				  <div class="form-group">
				    <label for="description">Açıklama</label>
						<vue-editor v-model="question.description" id="description"></vue-editor>
				  </div>
				  <div class="form-group">
				    <label for="description">Etiketler</label>
				    <input v-model="question.tags" type="text" class="form-control" id="tags" placeholder="Sorunun etiketlerini virgülle ayırarak giriniz">
				  </div>
				  <br><br>
				  <div class="text-center">
				  	<button type="submit" class="btn btn-success" :disabled="saveEnabled">Soru Sor</button>
				  </div>
				</form>
      </div>
    </div>
  </div>
</template>

<script>
	import { VueEditor } from "vue2-editor";

	export default {
		components: {
			VueEditor
		},
		data() {
			return {
				question: {
					title: "",
					description: "",
					tags: ""
				},
				saveButtonClicked: false
			}
		},
		computed: {
			saveEnabled() {
				if (this.question.title.length > 0 && this.question.description.length > 0 && this.question.tags.length > 0) {
					return false;
				} else {
					return true;
				}
			},
			isLoading() {
				if (this.saveButtonClicked) {
					return {
						display: "block"
					}
				} else {
					return {
						display: "none"
					}
				}
			}
		},
		methods: {
			onSubmit() {
				this.saveButtonClicked = true;
				this.$store.dispatch("ask_question", { ...this.question });
			}
		},
		beforeRouteLeave(to, from, next) {
			if ((this.question.title.length > 0 || 
					this.question.description.length > 0 || 
					this.question.tags.length > 0) &&
					!this.saveButtonClicked) {
				if (confirm("Kaydedilmemiş değişiklikler var. Yine de çıkmak istiyor musunuz?")) {
					next();
				} else {
					next(false);
				}
			} else {
				next();
			}
		}
	}
</script>