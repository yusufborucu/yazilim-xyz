<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-4">
				<h1>Giriş Yap</h1>
				<form @submit.prevent="onSubmit" class="login-form">
				  <div class="form-group">
				    <label for="email">E-posta Adresi</label>
				    <input v-model="user.email" type="email" class="form-control" id="email" placeholder="E-posta adresinizi giriniz">
				  </div>
				  <div class="form-group">
				    <label for="password">Parola</label>
				    <input v-model="user.password" type="password" class="form-control" id="password" placeholder="Parolanızı giriniz">
				  </div>
				  <div class="forgot-password">
						<router-link to="/forgot" tag="a">
            	Parolamı unuttum
          	</router-link>	
				  </div>
				  <br><br>
				  <div class="text-center">
				  	<button type="submit" class="btn btn-success" :disabled="saveEnabled">Giriş Yap</button>
				  </div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					email: "",
					password: ""
				}
			}
		},
		computed: {
			saveEnabled() {
				if (this.user.email.length > 0 && this.user.password.length > 0) {
					return false;
				} else {
					return true;
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