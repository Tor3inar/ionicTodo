import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { FirebaseProvider } from './firebase-provider';
import 'rxjs/add/operator/map';

/*
  Generated class for the TodosProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TodosProvider {

  constructor(
    public http: Http, 
    public toastCtrl: ToastController, 
    public fbp: FirebaseProvider) 
    {}

  addTodo(todo: string){

    let todosArr = new Array;
    this.fbp.getTodos().forEach(todo2 => {
      todosArr.push(todo2);
    });

    if (todosArr.indexOf(todo) > -1){
      let toast = this.toastCtrl.create({
        message: "That todo is already listed",
        duration: 3000,
        position: "top"
      });
      toast.present();
    } else if (todo.trim() === "" || todo.length === 0) {
        let toast = this.toastCtrl.create({
        message: "You can't add a blank todo",
        duration: 3000,
        position: "top"
      });
      toast.present();
    } else

    this.fbp.addTodo(todo);
  }

  getTodos(): any{
    return this.fbp.getTodos();
  }

  addDoneTodo(todo: string){
    this.fbp.addDone(todo);
  }

  getDoneTodos(): any{
    return this.fbp.getTodos();
  }

  removeTodo(todo: string){
    this.fbp.removeTodo(todo);
  }

  removeDone(done: string){
    this.fbp.removeDone(done);
  }

  remove(array: any[], item: any){
    let index: number = array.indexOf(item);
    if (index == 0) array.shift();
    else if (index == array.length -1) array.pop();
    else array.splice(index, index);
  }

}
