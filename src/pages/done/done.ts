import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Done page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-done',
  templateUrl: 'done.html'
})
export class DonePage {

static doneItems: string[] = DonePage.getFinished();
toggleOptions: boolean = false;

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad() {
    console.log('Hello Done Page');
  }

  static getFinished(): string[] {

    return ["done item 1"]; //test
  }

  static deleteItem(item){
    this.remove(this.doneItems, item)
  }

  static remove(array: any[], item: any){
    let index: number = array.indexOf(item);
    if (index == 0) array.shift();
    else if (index == array.length -1) array.pop();
    else array.splice(index, index);
  }

   static addDoneItem(item: string){
    this.doneItems.push(item);
  }

}
