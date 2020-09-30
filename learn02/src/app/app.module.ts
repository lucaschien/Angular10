import { BrowserModule } from '@angular/platform-browser'; // 只能在根模組中匯入 BrowserModule, 而且此module已包含 CommonModule
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 大單元 module
import { IndexModule } from './modules/index/index.module';

// 筆記: 由於用了laze load所以在主要appModule就不用立刻給予其他單元的 module
// import { NewsModule } from './modules/news/news.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    IndexModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
