import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { TestRootServices } from './services/testRoot.services';

import { AppComponent } from './components/appComponent/app.component';
import { TestComponent } from './components/testComponent/test.component';
import { UserInfoComponent } from './components/userInfoComponent/userInfo.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    TestRootServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
