<template>
	<div class="container">
		<div class="row">
			<div class="col-md-8" v-if="getQuestions.length > 0">
				<h2>Son Sorular</h2>
				<div 
					class="card" 
					v-bind:key="question.id"
					v-for="question in getQuestions">
				  <div class="card-body">
				    <h5 class="card-title">{{ question.title }}</h5>
				    <div class="tags">
				    	<span 
								class="border p-1 mr-1" 
								v-bind:key="tag.id"
								v-for="tag in question.tags"><a href="#">{{ tag.tag }}</a></span>
				    </div>
				    <div class="infos">
				    	<span class="border p-2">{{ question.answer_count }} cevap</span>
				    	<span class="border p-2">{{ question.reading }} okunma</span>
				    </div>
				    <div class="author-date">
				    	<img src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png" height="30" width="30">
				    	<span>{{ question.user.username }}</span>
				    	<br>
				    	<span class="date">{{ question.date }}</span>
				    </div>
				  </div>
				</div>
				<div class="text-center">
					<button class="btn btn-primary" onclick="location.href='questions.html';">Tümünü Gör</button>
				</div>
			</div>
			<div class="col-md-8" v-else>
				<div class="alert alert-warning">
					<strong>Henüz soru sorulmamış.</strong>
					<br />
					<small>Soru sormak için sağ üstte bulunan Soru Sor butonundan yararlanabilirsiniz.</small>
				</div>
			</div>
			<div class="col-md-4">
				<div class="top-rated mb-2">
					<h2>En İyiler</h2>
					<ul class="list-group">
					  <li class="list-group-item d-flex justify-content-between align-items-center">
					  	<img src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png" height="30" width="30">
					    yusufborucu
					    <span class="badge badge-success badge-pill">14</span>
					  </li>
					  <li class="list-group-item d-flex justify-content-between align-items-center">
					    <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png" height="30" width="30">
					    yusufborucu
					    <span class="badge badge-success badge-pill">2</span>
					  </li>
					  <li class="list-group-item d-flex justify-content-between align-items-center">
					    <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png" height="30" width="30">
					    yusufborucu
					    <span class="badge badge-success badge-pill">1</span>
					  </li>
					</ul>
					<div class="text-center mt-2">
						<button class="btn btn-primary" onclick="location.href='top-rateds.html';">Tümünü Gör</button>
					</div>
				</div>
				<div class="popular-tags">
					<h2>Popüler Etiketler</h2>
					<ul class="list-group">
					  <li class="list-group-item d-flex justify-content-between align-items-center">
					    * Php
					    <span class="badge badge-primary badge-pill">14</span>
					  </li>
					  <li class="list-group-item d-flex justify-content-between align-items-center">
					    * Java
					    <span class="badge badge-primary badge-pill">2</span>
					  </li>
					  <li class="list-group-item d-flex justify-content-between align-items-center">
					    * Python
					    <span class="badge badge-primary badge-pill">1</span>
					  </li>
					</ul>
					<div class="text-center mt-2">
						<button class="btn btn-primary" onclick="location.href='popular-tags.html';">Tümünü Gör</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	
	export default {
		created() {
			this.$store.dispatch("last_questions");
		},
		computed: {
			...mapGetters(["getQuestions"])
		}
	}
</script>