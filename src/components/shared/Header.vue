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
					<form class="form-inline" onsubmit="return search();">
			      <input class="form-control" type="search" placeholder="Ara...">
			    </form>
				</div>
				<div class="col-md-3 mt-3">
          <router-link to="/login" tag="button" class="btn btn-success">
            Giriş Yap
          </router-link>		
          <router-link to="/register" tag="button" class="btn btn-primary">
            Kayıt Ol
          </router-link>			
					<router-link to="/ask-question" tag="button" class="btn btn-warning">
            Soru Sor
          </router-link>		
					<a :class="logoutClass" @click.prevent="logout" href="#">Çıkış Yap</a>			
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
			}
		},
		computed: {
			logoutClass() {
				return {
					'd-none': !this.$store.getters.isAuthenticated
				}
			}
		}
	}
</script>