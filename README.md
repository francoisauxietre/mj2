# mj2
le nouveau angulaer en ionic

etapes intallation 1
sudo npm install -g ionic cordova
etape 2 creation d'un porjet MJionic
ionic start MJionic tutorial --type=ionic-angular
3 lancement 
cd MJionic/
$ ionic serve
4 deploiement
ionic cordova run android --prod --release
ajout 

5 ajout de angular à ionic 
sudo npm install @ionic/angular@latest --save
6 pour tester sur une tablette ou telephone 
sudo npm i -g native-run

ionic cordova run android --device
ajout de le index.html dans le header
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"/>


5 ajout dans le style.css du projet angualr
/* Core CSS required for Ionic components to work properly */
@import "~@ionic/angular/css/core.css";

/* Basic CSS for apps built with Ionic */
@import "~@ionic/angular/css/normalize.css";
@import "~@ionic/angular/css/structure.css";
@import "~@ionic/angular/css/typography.css";

/* Optional CSS utils that can be commented out */
@import "~@ionic/angular/css/padding.css";
@import "~@ionic/angular/css/float-elements.css";
@import "~@ionic/angular/css/text-alignment.css";
@import "~@ionic/angular/css/text-transformation.css";
@import "~@ionic/angular/css/flex-utils.css";
@import "~@ionic/angular/css/display.css";cd MyIonicProject/
$ ionic serve

