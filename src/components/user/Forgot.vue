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
				  	<button type="submit" class="btn btn-success" :disabled="saveEnabled">Parola Sıfırla</button>
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
					email: ""
				}
			}
		},
		computed: {
			saveEnabled() {
				if (this.user.email.length > 0) {
					return false;
				} else {
					return true;
				}
			}
		},
		methods: {
			onSubmit() {
				this.$store.dispatch("forgot", { ...this.user });
			}
		}
	}
</script>