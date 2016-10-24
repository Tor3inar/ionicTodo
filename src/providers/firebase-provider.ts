import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, FirebaseListObservable, FirebaseAuth } from 'angularfire2';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FirebaseProvider {

  todoList: FirebaseListObservable<any>;
  doneList: FirebaseListObservable<any>;
 
  constructor(
    public http: Http, 
    public af: AngularFire, 
    public auth: FirebaseAuth
    ) {
      this.auth.subscribe((data) => {
      if(data) {
        this.todoList = this.af.database.list('/todoList');
        this.doneList = this.af.database.list('/doneList');
      }
    });
    }

  ngOnInit() {
    
  }
  addTodo(todo: string){
    this.todoList.push(todo);
  }

  removeTodo(todo: string){
    this.todoList.remove(todo);
  }

  getTodos(){
    return this.af.database.list('/todoList')
  }

  addDone(todo: string){
    this.doneList.push(todo);
  }

  removeDone(done: string){
    this.doneList.remove(done);
  }

  getDones(){
    return this.doneList;
  }


}
