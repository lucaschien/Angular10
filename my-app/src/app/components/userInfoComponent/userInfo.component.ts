import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestRootServices } from '../../services/testRoot.services';
import { ActivatedRoute } from '@angular/router'; //取得URL參數用
import { HttpClient } from '@angular/common/http'; //ajax

@Component({
  selector: 'user-info-comp',
  templateUrl: './userInfo.component.html',
  styleUrls: ['./userInfo.component.scss'],
  providers: [],
})

export class UserInfoComponent implements OnInit {
  constructor (
    private testRootServices: TestRootServices,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  rootColor: string;

  newColorName: string;

  params: string;
  queryString: object;
  cart = [];

  accoutList =[];

  ngOnInit() {
    this.rootColor = this.testRootServices.getColor();
    this.getAllColors(); //發現在這邊執行, 而該方法中有跟service相關的函式呼叫的話, 會有類似 vuex getters 的效果
    //實驗url帶參數 - (params)
    this.route.paramMap.subscribe(params => {
      this.params = params.get('testId')
      console.log('url params: ', this.params);
    });
    //實驗url帶參數 - (queryString)
    this.route.queryParams.subscribe(value => {
      this.queryString = value;
      console.log('url queryString: ', this.queryString);
    });
  }

  public lookRootColor() {
    this.rootColor = this.testRootServices.getColor();
    console.log(this.testRootServices.getColor());
  }

  public getAllColors () {
    this.cart = this.testRootServices.getCart();
  }
  
  public createColorInCart() {
    if (!this.newColorName) return 
    this.newColorName = this.newColorName.trim(); //頭尾去空白
    this.testRootServices.addToCart({
      name: this.newColorName,
      id: new Date().getTime().toString()
    });
    this.newColorName = '';
    /* 發現: 在 ngOnInit 呼叫了 this.getAllColors(),
    可是在 getAllColors 方法中有呼叫 this.testRootServices.getCart() 這個 service,
    所以當 service 上的 cart 有異動時, 就會自動觸發this.testRootServices.getCart(),
    去同步cart這個變數, 直到元件生命期被銷毀.
    PS. 類似 vue 的 computed 或是 vuex 的 getters
    */
    //this.getAllColors();
  }

  public removeColorInCart(id) {
    this.testRootServices.clearCart(id);
  }

  public editColor(item) {
    item.inEdit = true;
    item.catchName = item.name;
    console.log('item...', item);
  }

  public saveEditColor(item) {
    delete item.inEdit;
    delete item.catchName;
    console.log('item...', item);
  }

  public cancelEditColor(item) {
    item.name = item.catchName;
    delete item.inEdit;
    delete item.catchName;
    console.log('item...', item);
  }

  // ajax 方法 (提醒此api是用我自己local端起nodeJs那邊學習的專案包lucas-studio的api)
  public callAPI() {
    let path: string = `http://localhost:3000/api/account/list`;
    this.http.get<any>(path).subscribe((result) => {
      if (result.errorCode === '99660001') {
        this.accoutList = result.data.items;
      }
    });
  }

}