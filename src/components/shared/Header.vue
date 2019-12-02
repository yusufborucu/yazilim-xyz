<template>
	<header class="bg-dark">
		<div class="container">
			<div class="row">
				<div class="col-md-3">
					<nav class="navbar navbar-light">
						<router-link to="/" tag="a" class="navbar-brand text-white">
							yazilim.xyz
						</router-link>
					</nav>
				</div>
				<div class="col-md-6 mt-3">
					<form @submit.prevent="onSubmit" class="form-inline">
			      <input class="form-control" type="search" placeholder="Ara...">
			    </form>
				</div>
				<div class="col-md-3 mt-3">
          <router-link to="/login" tag="button" class="btn btn-success" :class="loginClass">
            Giriş Yap
          </router-link>		
          <router-link to="/register" tag="button" class="btn btn-primary" :class="loginClass">
            Kayıt Ol
          </router-link>			
					<router-link to="/ask-question" tag="button" class="btn btn-warning" :class="logoutClass">
            Soru Sor
          </router-link>		
					<div class="dropdown" :class="logoutClass">
						<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							yusufborucu
						</button>
						<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a class="dropdown-item" href="#">Profil</a>
							<a class="dropdown-item" @click.prevent="logout" href="#">Çıkış Yap</a>
						</div>
					</div>		
				</div>
			</div>
		</div>
		<hr/>
	</header>
</template>

<script>
	export default {
		methods: {
			logout() {
				this.$store.dispatch("logout");
			},
			onSubmit() {
				alert('Ara...');
			}
		},
		computed: {
			loginClass() {
				return {
					'd-none': this.$store.getters.isAuthenticated					
				}
			},
			logoutClass() {
				return {
					'd-none': !this.$store.getters.isAuthenticated,
					'd-inline': this.$store.getters.isAuthenticated
				}
			}
		}
	}
</script>