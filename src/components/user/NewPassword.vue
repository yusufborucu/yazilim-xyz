<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-4">
				<h1>Parola Sıfırla</h1>
				<form @submit.prevent="onSubmit" class="login-form">
				  <div class="form-group">
				    <label for="password">Parola</label>
				    <input v-model="user.password" type="password" class="form-control" id="password" placeholder="Parolanızı giriniz">
				  </div>
          <div class="form-group">
				    <label for="password">Parola tekrar</label>
				    <input v-model="user.c_password" type="password" class="form-control" id="c_password" placeholder="Parolanızı tekrar giriniz">
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
          password: null,
          c_password: null
				}
			}
		},
		methods: {
			onSubmit() {
				this.$store.dispatch("new_password", { ...this.user, remember_token: this.$route.params.remember_token })
					.then(response => {
						this.$router.push("/");
					});
			}
		}
	}
</script>