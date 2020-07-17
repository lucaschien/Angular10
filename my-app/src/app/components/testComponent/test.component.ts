//OnInit, ngOnDestroy 是生命週期鉤子
import { Component, OnInit, OnDestroy } from '@angular/core';

import { UtilsServices } from '../../services/utils.services';
import { TestRootServices } from '../../services/testRoot.services';

@Component({
  selector: 'comp-test', // 這是此組件在 html 中使用的 tag 名稱, 如 <comp-test></comp-test>
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [UtilsServices], // 這是指此組件需要哪些外部的 service (注意這也代表在這組件中,建立此service的類別實體,因此是屬於root的服務就不應該寫在這)
})
export class TestComponent implements OnInit, OnDestroy {
  public test: string = '123';

  public testList: Array<any> = [
    {id: 'a1', name: 'lucas', price:0},
    {id: 'a2', name: 'bert', price:0},
    {id: 'a3', name: 'jack', price:0},
  ];

  //注意: 當 Component 被實例化時，會建立一個新的 Service 實體，Service 的存活週期是跟隨著 Component
  constructor(
    private utilsServices: UtilsServices, 
    private testRootServices: TestRootServices
  ) {

  }

  //實作此組件的生命週期鉤子
  ngOnInit() {
    console.log('生命週期鉤子: ngOnInit');
    //實驗在此呼叫注入到root的服務
    console.log(this.testRootServices.getColor());
  }
  ngOnDestroy() {
    console.log('生命週期鉤子: ngOnDestroy');
  }

  //提供 <input> event change 的事件回呼
  public testChange(event) {
    console.log(event);
  }

  //提供 .test-ngFor click 的事件回呼
  public testClick(item: any, i: number) {
    item.price = item.price + 1;
    this.utilsServices.alerMsg(item); //@@為什麼定義是string, 這邊用item物件卻不會警告?
  }

  //設定 root color
  public setRootColor() {
    this.testRootServices.setColor('yellow');
  }

  public change() {
    this.testList = [
      {id: 'a1', name: 'lucas', price:0},
      {id: 'a2', name: 'bert', price:0},
      {id: 'a3', name: 'jack22', price:0},
      {id: 'a4', name: 'wwwww', price:0},
    ];
  }

  //讓 ngFor 建立類似 v-for 的:key用... 好爛的用法還要自己寫一個函式處裡
  trackByItems(index: number, item: any): string { 
    //console.log('trackByItems...', item);
    return item.id; 
  }

}