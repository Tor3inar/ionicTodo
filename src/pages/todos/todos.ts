import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html'
})
export class TodosPage {

newItem: string = "";
todos: string[] = this.getTodos();
toggleNew: boolean = false;

  constructor(public navCtrl: NavController) {

  }

  addTodo(){
    this.toggleNew = true;
  }

  btnAdd(newItem: string){
    this.todos.push(this.newItem);
    this.toggleNew = false;
    this.newItem = "";
  }

  btnCancel(){
    this.toggleNew = false;
    this.newItem = "";
  }

  getTodos(): string[]{

    return ["item 1", "item 2"];
  }
}