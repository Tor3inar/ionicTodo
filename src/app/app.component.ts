import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AngularFire } from 'angularfire2'
import { StatusBar } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  public rootPage;

  constructor(platform: Platform, af: AngularFire) {
    af.auth.subscribe(auth => {
      if (auth) {
        this.rootPage = TabsPage;
      } else this.rootPage = LoginPage;
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
