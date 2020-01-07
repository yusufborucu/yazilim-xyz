# yazilim-xyz

Yazılım Soru Cevap Platformu projesi olan yazilim.xyz'nin Frontend tarafının yer aldığı repo.

Backend: https://github.com/yusufborucu/yazilim-xyz-api

Socket: https://github.com/yusufborucu/yazilim-xyz-socket

## Projenin amacı

Yazılım geliştiriciler için bir soru cevap platformu oluşturmak.

## Projenin içeriği

Üyelik işlemleri, soru sorma, cevap yazma, oy verme, etiketler ve sıralama.

## Projenin teknik altyapısı;

* Tasarım: Html, Css (Scss)
* Veritabanı: MySQL
* Backend: Laravel
  * Authentication işlemleri: Passport
* Frontend: Vue.js
  * State yönetimi: vuex
  * Kod renklendirme: highlight.js
  * Kullanıcı bilgilendirme: vue-notification
  * Routing işlemleri: vue-router
  * Rich text editor: vue2-editor
  * Validation işlemleri: vuelidate
  * Socket Client: vue-socket.io
* Anlık veri iletişimi: Node.js (Socket)
  * Kullanıcının, sorusuna cevap geldiği anda bilgilendirilmesi
* Deploy: Shared Hosting (Laravel, Vue.js), Heroku (Node.js)
