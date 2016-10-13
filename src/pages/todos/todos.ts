import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { TodosProvider } from '../../providers/todos-provider';

@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html'
})

export class TodosPage {
newItem: string = "";
todos: string[] = this.todosProvider.getTodos();
toggleNew: boolean;
toggleOptions: boolean;
done: string[] = this.todosProvider.getDoneTodos();

  constructor(
    public navCtrl: NavController, 
    public todosProvider: TodosProvider, 
    public af: AngularFire
    ) {

    this.toggleOptions, this.toggleNew = false;
  }

  iconAddTodo(){
    this.toggleNew = true;
  }

  logout() {
     this.af.auth.logout();
  }

   btnAdd(newItem: string){
    this.todosProvider.addTodo(newItem);
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

  btnDone(todo: string){
    this.todosProvider.addDoneTodo(todo);
    this.todosProvider.removeTodo(todo);
  }

  getDoneTodos(): string[]{

    return this.done;
  }

  slideRemove(todo: string){
    this.todosProvider.removeTodo(todo);
  }

}