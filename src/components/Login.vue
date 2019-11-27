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
				  	<a href="#">Parolamı unuttum</a>
				  </div>
				  <br><br>
				  <div class="text-center">
				  	<button type="submit" class="btn btn-success">Giriş Yap</button>
				  </div>
				  <div class="text-center mt-3">
				  	<button type="submit" class="btn btn-danger">Google ile giriş yap</button>
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
					email: null,
					password: null
				}
			}
		},
		methods: {
			onSubmit() {
				this.$store.dispatch("login", { ...this.user })
					.then(response => {
						this.$router.push("/");
					});
			}
		}
	}
</script>