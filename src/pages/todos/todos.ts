import { Component, Input } from '@angular/core';
import { DonePage } from '../done/done';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html'
})
export class TodosPage {
newItem: string = "";
todos: string[] = this.getTodos();
toggleNew: boolean = false;
toggleOptions: boolean = false;

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

  btnOptions(){
    if(this.toggleOptions == true) this.toggleOptions = false;
    else this.toggleOptions = true;
  }

  btnDone(){
    DonePage.addDoneItem("hello");
    
  }

  removeItem(item: string){
    this.remove(this.todos, item);
  }

  remove(array: any[], item: any){
    let index: number = array.indexOf(item);
    if (index == 0) array.shift();
    else if (index == array.length -1) array.pop();
    else array.splice(index, index);
  }

  getTodos(): string[]{

    return ["item 1", "item 2"];
  }
}