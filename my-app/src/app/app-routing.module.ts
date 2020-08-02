import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexViewComponent } from './views/indexView/IndexView.component';
import { ContactUsViewComponent } from './views/contactUsView/contactUsView.component';

import { UserInfoComponent } from './components/userInfoComponent/userInfo.component'; //提醒:這個只是我在實驗用,他只是一般組件不是概念上為views的組件.

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexViewComponent },
  { path: 'userInfo/:testId', component: UserInfoComponent },
  { path: 'contactUs', component: ContactUsViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
