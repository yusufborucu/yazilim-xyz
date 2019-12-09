<template>
  <div class="container">
		<div class="row justify-content-center">
			<div class="col-md-4">
				<h1>Kayıt Ol</h1>
				<form @submit.prevent="onSubmit" class="login-form">
					<div class="form-group">
				    <label for="username">Kullanıcı Adı</label>
				    <input v-model="user.username" type="text" class="form-control" id="username" placeholder="Kullanıcı adınızı giriniz">
				  </div>
				  <div class="form-group">
				    <label for="email">E-posta Adresi</label>
				    <input v-model="user.email" type="email" class="form-control" id="email" placeholder="E-posta adresinizi giriniz">
				  </div>
				  <div class="form-group">
				    <label for="password">Parola</label>
				    <input v-model="user.password" type="password" class="form-control" id="password" placeholder="Parolanızı giriniz">
				  </div>
				  <div class="form-group">
				    <label for="c_password">Parola tekrar</label>
				    <input v-model="user.c_password" type="password" class="form-control" id="c_password" placeholder="Parolanızı tekrar giriniz">
				  </div>
				  <br><br>
				  <div class="text-center">
				  	<button type="submit" class="btn btn-success" :disabled="saveEnabled">Kayıt Ol</button>
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
					username: "",
					email: "",
					password: "",
					c_password: ""
				}
			}
		},
		computed: {
			saveEnabled() {
				if (this.user.username.length > 0 && this.user.email.length > 0 && this.user.password.length > 0 && this.user.c_password.length > 0) {
					return false;
				} else {
					return true;
				}
			}
		},
		methods: {
			onSubmit() {
				if (this.user.password != this.user.c_password) {
					alert('Girdiğiniz parolalar eşleşmiyor.');
				} else {
					this.$store.dispatch("register", { ...this.user });
				}
			}
		}
	}
</script>