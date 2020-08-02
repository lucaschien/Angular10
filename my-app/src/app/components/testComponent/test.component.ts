//OnInit, ngOnDestroy 是生命週期鉤子
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Input, Output, EventEmitter } from '@angular/core';

import { UtilsServices } from '../../services/utils.services';
import { TestRootServices } from '../../services/testRoot.services';

@Component({
  selector: 'test-comp', // 這是此組件在 html 中使用的 tag 名稱, 如 <test-comp></test-comp>
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [UtilsServices], // 這是指此組件需要哪些外部的 service (注意這也代表在這組件中,建立此service的類別實體,因此是屬於root的服務就不應該寫在這)
})
export class TestComponent implements OnInit, OnDestroy {
  //注意: 當 Component 被實例化時，會建立一個新的 Service 實體，Service 的存活週期是跟隨著 Component
  constructor (
    private utilsServices: UtilsServices, 
    private testRootServices: TestRootServices,
  ) {
  }
  
  @Input() testName: string; //實驗讓父層帶入屬性, 類似 vue 的 props
  @Output() clickName = new EventEmitter(); //實驗讓父層帶入方法, 類似 vue 的 $emit

  callClickName() {
    //注意: angular emit 限定只能帶一個參數, 因此如果要帶多個就用 {} 包起來吧...爛
    this.clickName.emit('父層帶入的testName: ' + this.testName);
  }

  public test: string;  

  public testList: Array<any> = [
    {id: 'a1', name: 'lucas', price:0},
    {id: 'a2', name: 'bert', price:0},
    {id: 'a3', name: 'jack', price:0},
  ];

  /* 生命週期的順序依照以下順序
    ngOnChanges - 在輸入屬性 (input)/輸出屬性 (output)的繫結值發生變化時呼叫。 (多次執行, @input值發生變化時都會呼叫) <--- 後會的鉤子最後都會因為他而觸發
    ngOnInit - 在第一次 ngOnChanges 完成後呼叫。                           (只調用一次)
    ngDoCheck - 開發者自訂變更檢測。                                       (多次執行, 因為接續 ngOnChanges, ngOnInit 後呼叫, 而 ngOnChanges 是多次)
    ngAfterContentInit - 在元件內容初始化後呼叫。                           (只調用一次)
    ngAfterContentChecked - 在元件內容每次檢查後呼叫。                      (多次執行, 因為接續 ngDoCheck, 而ngDoCheck 又接續 ngOnChanges)
    ngAfterViewInit - 在元件檢視初始化後呼叫。                              (只調用一次)
    ngAfterViewChecked - 在元件檢視每次檢查後呼叫。                         (多次執行, 因為接續之前的xxx, 而最後又接續 ngOnChanges)
    ngOnDestroy - 在指令或元件銷燬前呼叫。                                  (只調用一次)
  */
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
    this.utilsServices.logMsg(item); //@@為什麼定義是string, 這邊用item物件卻不會警告?
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