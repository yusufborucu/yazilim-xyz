<template>
  <div class="container">
		<div class="row justify-content-center">
			<div class="col-md-4">
				<h1>Kayıt Ol</h1>
				<form @submit.prevent="onSubmit" class="login-form">
					<div class="form-group">
				    <label for="username">Kullanıcı Adı</label>
				    <input @blur="$v.user.username.$touch()" v-model="user.username" type="text" class="form-control" :class="{'is-invalid': $v.user.username.$error}" id="username" placeholder="Kullanıcı adınızı giriniz">						
						<small v-if="!$v.user.username.required" class="form-text text-danger">Bu alan zorunludur.</small>
				  </div>
				  <div class="form-group">
				    <label for="email">E-posta Adresi</label>
				    <input @blur="$v.user.email.$touch()" v-model="user.email" type="email" class="form-control" :class="{'is-invalid': $v.user.email.$error}" id="email" placeholder="E-posta adresinizi giriniz">
						<small v-if="!$v.user.email.required" class="form-text text-danger">Bu alan zorunludur.</small>
						<small v-if="!$v.user.email.email" class="form-text text-danger">Lütfen geçerli bir e-posta adresi giriniz.</small>
				  </div>
				  <div class="form-group">
				    <label for="password">Parola</label>
				    <input @blur="$v.user.password.$touch()" v-model="user.password" type="password" class="form-control" :class="{'is-invalid': $v.user.password.$error}" id="password" placeholder="Parolanızı giriniz">
						<small v-if="!$v.user.password.required" class="form-text text-danger">Bu alan zorunludur.</small>
						<small v-if="!$v.user.password.minLength" class="form-text text-danger">Lütfen en az {{ $v.user.password.$params.minLength.min }} karakter giriniz.</small>
						<small v-if="!$v.user.password.maxLength" class="form-text text-danger">Lütfen en çok {{ $v.user.password.$params.maxLength.max }} karakter giriniz.</small>
				  </div>
				  <div class="form-group">
				    <label for="c_password">Parola tekrar</label>
				    <input @blur="$v.user.c_password.$touch()" v-model="user.c_password" type="password" class="form-control" :class="{'is-invalid': $v.user.c_password.$error}" id="c_password" placeholder="Parolanızı tekrar giriniz">
						<small v-if="!$v.user.c_password.required" class="form-text text-danger">Bu alan zorunludur.</small>
						<small v-if="!$v.user.c_password.minLength" class="form-text text-danger">Lütfen en az {{ $v.user.c_password.$params.minLength.min }} karakter giriniz.</small>
						<small v-if="!$v.user.c_password.maxLength" class="form-text text-danger">Lütfen en çok {{ $v.user.c_password.$params.maxLength.max }} karakter giriniz.</small>
						<small v-if="!$v.user.c_password.sameAs" class="form-text text-danger">Girdiğiniz parolalar birbiriyle uyuşmuyor.</small>
				  </div>
				  <br><br>
				  <div class="text-center">
				  	<button type="submit" class="btn btn-success" :disabled="$v.$invalid">Kayıt Ol</button>
				  </div>
				</form>
			</div>
		</div>
	</div>
</template>	

<script>
	import { required, email, minLength, maxLength, sameAs } from "vuelidate/lib/validators";

	export default {
		data() {
			return {
				user: {
					username: "",
					email: "",
					password: "",
					c_password: ""
				}
			}
		},
		validations: {
			user: {
				username: {
					required
				},
				email: {
					required,
					email
				},
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
				this.$store.dispatch("register", { ...this.user });
			}
		}
	}
</script>