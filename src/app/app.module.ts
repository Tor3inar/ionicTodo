import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { IonicApp, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { TodosPage } from '../pages/todos/todos';
import { DonePage } from '../pages/done/done';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { TodosProvider } from '../providers/todos-provider';
import { FirebaseProvider } from '../providers/firebase-provider';

export const firebaseConfig = {
  apiKey: "AIzaSyD8AbiUvmjJzg5a6OJjzYIoeK3nWrduG5w",
  authDomain: "todoapp-3007d.firebaseapp.com",
  databaseURL: "https://todoapp-3007d.firebaseio.com",
  storageBucket: "todoapp-3007d.appspot.com",
  messagingSenderId: "407960269920"
};

@NgModule({
  declarations: [
    MyApp,
    TodosPage,
    DonePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp), 
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodosPage,
    DonePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    TodosProvider,
    FirebaseProvider
    ]
})
export class AppModule {}
