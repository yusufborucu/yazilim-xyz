<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-4">
				<h1>Parola Sıfırla</h1>
				<form @submit.prevent="onSubmit" class="login-form">
				  <div class="form-group">
				    <label for="password">Parola</label>
				    <input @blur="$v.user.password.$touch()" v-model="user.password" type="password" class="form-control" :class="{'is-invalid': $v.user.password.$error}" id="password" placeholder="Parolanızı giriniz">
						<small v-if="!$v.user.password.required" class="form-text text-danger">Bu alan zorunludur.</small>
						<small v-if="!$v.user.password.minLength" class="form-text text-danger">Lütfen en az {{ $v.user.password.$params.minLength.min }} karakter giriniz.</small>
						<small v-if="!$v.user.password.maxLength" class="form-text text-danger">Lütfen en çok {{ $v.user.password.$params.maxLength.max }} karakter giriniz.</small>
				  </div>
          <div class="form-group">
				    <label for="password">Parola tekrar</label>
				    <input @blur="$v.user.c_password.$touch()" v-model="user.c_password" type="password" class="form-control" :class="{'is-invalid': $v.user.c_password.$error}" id="c_password" placeholder="Parolanızı tekrar giriniz">
						<small v-if="!$v.user.c_password.required" class="form-text text-danger">Bu alan zorunludur.</small>
						<small v-if="!$v.user.c_password.minLength" class="form-text text-danger">Lütfen en az {{ $v.user.c_password.$params.minLength.min }} karakter giriniz.</small>
						<small v-if="!$v.user.c_password.maxLength" class="form-text text-danger">Lütfen en çok {{ $v.user.c_password.$params.maxLength.max }} karakter giriniz.</small>
						<small v-if="!$v.user.c_password.sameAs" class="form-text text-danger">Girdiğiniz parolalar birbiriyle uyuşmuyor.</small>
				  </div>
				  <br><br>
				  <div class="text-center">
				  	<button type="submit" class="btn btn-success" :disabled="$v.$invalid">Parola Sıfırla</button>
				  </div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import { required, minLength, maxLength, sameAs } from "vuelidate/lib/validators";

	export default {
		data() {
			return {
				user: {
          password: "",
          c_password: ""
				}
			}
		},
		validations: {
			user: {
				password: {
					required,
					minLength: minLength(6),
					maxLength: maxLength(8)
				},
				c_password: {
					required,
					minLength: minLength(6),
					maxLength: maxLength(8),
					sameAs: sameAs('password')
				}
			}
		},
		methods: {
			onSubmit() {
				this.$store.dispatch("new_password", { ...this.user, remember_token: this.$route.params.remember_token });
			}
		}
	}
</script>