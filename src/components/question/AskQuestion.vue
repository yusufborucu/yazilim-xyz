<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Soru Sor</h1>
        <form>
				  <div class="form-group">
				    <label for="title">Başlık</label>
						<input @blur="$v.question.title.$touch()" v-model="question.title" type="text" class="form-control" :class="{'is-invalid': $v.question.title.$error}" id="title" placeholder="Sorunun başlığını giriniz">						
						<small v-if="!$v.question.title.required" class="form-text text-danger">Bu alan zorunludur.</small>
						<small v-if="!$v.question.title.maxLength" class="form-text text-danger">Lütfen en çok {{ $v.question.title.$params.maxLength.max }} karakter giriniz.</small>
				  </div>
				  <div class="form-group">
				    <label for="description">Açıklama</label>
						<vue-editor v-model="question.description" id="description"></vue-editor>
						<small v-if="!$v.question.description.required" class="form-text text-danger">Bu alan zorunludur.</small>
				  </div>
					<div class="form-group">
				    <label>Etiketler</label>
						<div class="tag-container">
							<span class="tag" v-for="(tag, index) in question.tags" v-bind:key="tag.id">
								<span class="content">{{ tag }}</span>
								<span class="tag-close" @click="removeOneTag(index)">X</span>
							</span>
							<input 
								type="text" 
								@keydown.enter="addTag"
								@keydown.backspace="removeTag" />
							<div class="error" v-if="error">Bu etiket daha önceden eklenmiş.</div>
						</div>
						<small v-if="!$v.question.tags.required" class="form-text text-danger">Bu alan zorunludur.</small>
				  </div>
				  <br><br>
				  <div class="text-center">
				  	<button type="button" class="btn btn-success" @click="onSubmit" :disabled="$v.$invalid">Soru Sor</button>
				  </div>
				</form>
      </div>
    </div>
  </div>
</template>

<script>
	import { VueEditor } from "vue2-editor";
	import { required, maxLength } from "vuelidate/lib/validators";

	export default {
		components: {
			VueEditor
		},
		data() {
			return {
				question: {
					title: "",
					description: "",
					tags: []
				},
				saveButtonClicked: false,
        error: false
			}
		},
		validations: {
			question: {
				title: {
					required,
					maxLength: maxLength(65)
				},
				description: {
					required
				},
				tags: {
					required
				}
			}
		},
		methods: {
			onSubmit() {
				var find = ['<pre class="ql-syntax" spellcheck="false">', '</pre>'];
				var replace = ['<pre class="ql-syntax" spellcheck="false"><code>', '</code></pre>'];
				this.question.description = this.replaceArray(this.question.description, find, replace);
				this.saveButtonClicked = true;
				this.$store.dispatch("ask_question", { ...this.question });
			},
			replaceArray(text, find, replace) {
				var replaceString = text;
				var regex; 
				for (var i = 0; i < find.length; i++) {
					regex = new RegExp(find[i], "g");
					replaceString = replaceString.replace(regex, replace[i]);
				}
				return replaceString;
			},
			addTag(event) {
        let text = event.target;
        let matchedTag = false;

        if (text.value.length > 0) {
          this.question.tags.forEach(tag => {
            if (tag.toLowerCase() === text.value.toLowerCase()) {
              matchedTag = true;
            } 
          });
          if (!matchedTag) {
            this.question.tags.push(text.value);
            text.value = ""; 
          } else {
            this.error = true;
            setTimeout(() => {
              this.error = false;
            }, 2000);
          }
        }
      },
      removeTag(event) {
        if (event.target.value.length <= 0) {
          this.question.tags.splice(this.question.tags.length - 1, 1);
        }
      },
      removeOneTag(index) {
        this.question.tags.splice(index, 1);
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