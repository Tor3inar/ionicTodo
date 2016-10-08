import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TodosProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TodosProvider {

  todos: string[] = [];
  doneTodos: string[] = [];

  constructor(public http: Http, public toastCtrl: ToastController) {
    
  }

  addTodo(todo: string){
    if (this.todos.indexOf(todo) > -1){
      let toast = this.toastCtrl.create({
        message: "That todo is already listed",
        duration: 3000,
        position: "top"
      })
      toast.present();
    } else if (todo.trim() === "" || todo.length === 0) {
        let toast = this.toastCtrl.create({
        message: "You can't add a blank todo",
        duration: 3000,
        position: "top"
      })
      toast.present();
    } else

    this.todos.push(todo);
  }

  getTodos(): string[]{
    return this.todos;
  }

  addDoneTodo(todo: string){
    this.doneTodos.push(todo);
  }

  getDoneTodos(): string[]{
    return this.doneTodos;
  }

  removeTodo(todo: string){
    this.remove(this.todos, todo);
  }

  removeDone(finished: string){
    this.remove(this.doneTodos, finished);
  }

  remove(array: any[], item: any){
    let index: number = array.indexOf(item);
    if (index == 0) array.shift();
    else if (index == array.length -1) array.pop();
    else array.splice(index, index);
  }

}
