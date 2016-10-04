import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TodosPage } from '../pages/todos/todos';
import { DonePage } from '../pages/done/done';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    TodosPage,
    DonePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp), 
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodosPage,
    DonePage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
