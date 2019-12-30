<template>
	<header id="header">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<nav class="navbar navbar-expand-lg navbar-light main-menu">
						<router-link to="/" tag="a" class="navbar-brand">
							<img src="/src/assets/svg/book.svg" width="26px" height="26px">
							<strong>yazilim</strong>xyz
						</router-link>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse main-menu-content" id="navbarSupportedContent">
							<ul class="navbar-nav">
								<li class="nav-item active">
									<a class="nav-link" href="#">Sorular</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">Etiketler</a>
								</li>
							</ul>
							<form @submit.prevent="onSubmit" class="search-content">
								<div class="form-group fg-icon mb-0">
									<input v-model="text" type="text" class="form-control" placeholder="Arama yap...">
									<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
												viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
										<path d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667
												S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732
												c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667
												c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z" fill="#a9a9af"/>
									</svg>
								</div>
							</form>
							<div class="header-user-menu">
								<ul>
									<li>
										<router-link to="/login" tag="a" :class="loginClass">Giriş Yap</router-link>
									</li>
									<li>
										<router-link to="/register" tag="button" class="btn btn-primary" :class="loginClass">Kayıt Ol</router-link>
									</li>
									<li>
										<div class="dropdown" :class="logoutClass">
											<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												{{ username }}
											</button>
											<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
												<router-link to="/profile" tag="a" class="dropdown-item">
													Profil
												</router-link>
												<a class="dropdown-item" @click.prevent="logout" href="#">Çıkış Yap</a>
											</div>
										</div>
									</li>						
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				text: ""
			}
		},
		methods: {
			logout() {
				this.$store.dispatch("logout");
				this.$socket.emit('dis_user_id', localStorage.getItem('user_id'));
			},
			onSubmit() {
				const path = `/search-result/${this.text}`;
				if (this.$route.path !== path) this.$router.push(path);
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
			},
			username() {
				if (this.$store.getters.getUsername != "")
					return this.$store.getters.getUsername;
				else
					return localStorage.getItem("username");
			}
		}
	}
</script>