import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexViewComponent } from './views/indexView/IndexView.component';
import { TestComponent } from './components/testComponent/test.component';
import { UserInfoComponent } from './components/userInfoComponent/userInfo.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexViewComponent },
  { path: 'userInfo/:testId', component: UserInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
