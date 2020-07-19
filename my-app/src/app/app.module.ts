import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; //此模塊使用哪個 router 設定

import { FormsModule } from '@angular/forms';

import { TestRootServices } from './services/testRoot.services';
//類似 vue container 的定義
import { IndexViewComponent } from './components/views/indexView/IndexView.component';

//類似 vue views 的定義
import { AppComponent } from './components/appComponent/app.component';

//一般組件定義
import { TestComponent } from './components/testComponent/test.component';
import { UserInfoComponent } from './components/userInfoComponent/userInfo.component';


@NgModule({
  //使用哪些 component元件, directives指令, pipes管道, (感覺怪怪的如果我有100個元件不就都要寫在這...應該不會是這樣才對之後在回頭研究)
  declarations: [
    IndexViewComponent,
    AppComponent,
    TestComponent,
    UserInfoComponent
  ],
  //依賴其他的模組
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  //使用哪些服務,如果服務是設定在這邊,
  //那此模組下的所有component都可以共用這服務的"類別實體",
  //而不是在該component內建一個類別實體
  providers: [
    TestRootServices
  ],
  //router 進入點, 只有根模組才應該設定這個 bootstrap 屬性
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
