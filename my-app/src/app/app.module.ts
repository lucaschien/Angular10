import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; //此模塊使用哪個 router 設定

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // 提醒 ReactiveFormsModule 要自己手動增加,不然在測試表單那邊會報錯

import { HttpClientModule } from '@angular/common/http'; // ajax 

//定義是所有 component 共用的 service <---某總概念上類似vue的vuex,但又不完全相同
import { TestRootServices } from './services/testRoot.services';

//類似 vue containers 的定義
import { AppComponent } from './containers/appComponent/app.component';

//類似 vue views 的定義
import { IndexViewComponent } from './views/indexView/indexView.component';
import { ContactUsViewComponent } from './views/contactUsView/contactUsView.component';

//一般 component 定義
import { TestComponent } from './components/testComponent/test.component';
import { UserInfoComponent } from './components/userInfoComponent/userInfo.component';
import { TestFormComponent } from './components/testFormComponent/testForm.component';
import { TestSlotComponent } from './components/testSlotComponent/testSlot.component';


@NgModule({
  //使用哪些 component元件, directives指令, pipes管道... 
  //...感覺怪怪的如果我有100個元件不就都要寫在這...應該不會是這樣才對之後在回頭研究
  declarations: [
    IndexViewComponent,
    ContactUsViewComponent,
    AppComponent,
    TestComponent,
    UserInfoComponent,
    TestFormComponent,
    TestSlotComponent
  ],
  //依賴其他的模組
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  //使用哪些service, 如果root層級的service是設定在這邊,
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
