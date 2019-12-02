<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-4">
				<h1>Parolamı Unuttum</h1>
				<form @submit.prevent="onSubmit" class="login-form">
				  <div class="form-group">
				    <label for="email">E-posta Adresi</label>
				    <input v-model="user.email" type="email" class="form-control" id="email" placeholder="E-posta adresinizi giriniz">
				  </div>
				  <br><br>
				  <div class="text-center">
				  	<button type="submit" class="btn btn-success">Parola Sıfırla</button>
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
					email: null
				}
			}
		},
		methods: {
			onSubmit() {
				this.$store.dispatch("forgot", { ...this.user })
					.then(response => {
						this.$router.push("/");
					});
			}
		}
	}
</script>