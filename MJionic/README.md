# mj2
le nouveau angular en ionic  documentation https://ionicframework.com/docs/building/testing  bien cocher ANGULAR A GAUCHE

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


import dans android studio en projet app
sudo chmod 777 /dev/kvm

ajout d'un emulateur nexus tablette

commmande possible sous ionic
ionic generate
? What would you like to generate?
❯ page
component
service
module
class
directive
guard

premier component installé:  ng component timeline
avant de mettre sur talette il faut  generer le projet  (cette commande build le projet il devient reconnu par intelij a ce moment comma 
application android ) Elle build 
ionic cordova prepare android

creation d'un live reload pour les test sur tablette  et en meme temps dans le browser en http://localhost:8100/
ionic cordova run android -l

la commande qui permet de debugger dans chrome  et cocher en bas ionic device
chrome://inspect/#devices


creation de file environement pour plutard 
export const environment = {
                                             production: false,
                                             databaseURL: 'https://e2e-test-api.my-great-app.com',
                                             projectId: 'my-great-app-e2e'
                                           };
                                           
explication des différents plugin et bridge 
https://ionicframework.com/docs/building/webview


INSTALLATION DU PREMIER PLUGIN DE CAMERA POUR AJOUTER UNE PHOTO AUX PJ
ionic cordova plugin add cordova-plugin-camera
sudo npm install @ionic-native/camera

si on veut faire des requete HTTP 
on doit installe pour ne pas avoir les problèmes de CORS POLICY comme a chaque fois 
https://ionicframework.com/docs/native/http/
ionic cordova plugin add cordova-plugin-advanced-http
sudo npm install @ionic-native/http





