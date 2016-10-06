import { Injectable } from '@angular/core';
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

  constructor(public http: Http) {
    
  }

  addTodo(todo: string){
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

  remove(array: any[], item: any){
    let index: number = array.indexOf(item);
    if (index == 0) array.shift();
    else if (index == array.length -1) array.pop();
    else array.splice(index, index);
  }

}
