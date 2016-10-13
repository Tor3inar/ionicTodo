import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { DonePage } from '../done/done';
import { TodosPage } from '../todos/todos';

@Component({
  selector: 'tabs-page',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TodosPage;
  tab2Root: any = DonePage;

  constructor() {

  }
}
