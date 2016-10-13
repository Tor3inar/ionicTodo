import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import firebase from 'firebase';
import { TabsPage } from '../tabs/tabs';
import { TodosPage } from '../todos/todos';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public loading;

  constructor(
    public navCtrl: NavController, 
    public af: AngularFire, 
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
    ) {
      af.auth.subscribe(auth => {
        if(auth){
          this.navCtrl.setRoot(TabsPage);
        }
      })
    }

  login(loginService: string) {

    this.showLoading();

      switch (loginService) {
        case "twitter":
          this.af.auth.login({
            provider: AuthProviders.Twitter,
            method: AuthMethods.Redirect
          }).then((authData) => {
            this.loading.dismiss();
          }).catch((error) => {this.showError(error)});
          break;

        case "facebook":
          this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Redirect
          }).then((authData) => {
            this.loading.dismiss();
          }).catch((error) => {this.showError(error)});
          break;

        case "google":
          this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Redirect
          }).then((authData) => {
            this.loading.dismiss();
          }).catch((error) => {this.showError(error)});
          break;

        default:
          this.loading.dismiss();
          console.log("login() takes the following string parameters: \"twitter\", \"facebook\" or \"google\" ");
          break;
      }

  }

  logout() {
     this.af.auth.logout();
  }

  showLoading(){
    this.loading = this.loadingCtrl.create({
    content: 'Please wait...'
    });
    this.loading.present();
  }

  showError(error){
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Login failed',
      subTitle: error,
      buttons: ['OK']
    });
    alert.present();
  }

}
