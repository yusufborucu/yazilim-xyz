<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-4">
				<h1>Giriş Yap</h1>
				<form @submit.prevent="onSubmit" class="login-form">
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
				  </div>
				  <div class="forgot-password">
						<router-link to="/forgot" tag="a">
            	Parolamı unuttum
          	</router-link>	
				  </div>
				  <br><br>
				  <div class="text-center">
				  	<button type="submit" class="btn btn-success" :disabled="$v.$invalid">Giriş Yap</button>
				  </div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import { required, email } from "vuelidate/lib/validators";

	export default {
		data() {
			return {
				user: {
					email: "",
					password: ""
				}
			}
		},
		validations: {
			user: {
				email: {
					required,
					email
				},
				password: {
					required
				}
			}
		},
		methods: {
			onSubmit() {
				this.$store.dispatch("login", { ...this.user });
			}
		}
	}
</script>