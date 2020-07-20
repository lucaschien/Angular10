import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestRootServices } from '../../services/testRoot.services';
import { ActivatedRoute } from '@angular/router'; //取得URL參數用

@Component({
  selector: 'user-info-comp',
  templateUrl: './userInfo.component.html',
  styleUrls: ['./userInfo.component.scss'],
  providers: [],
})

export class UserInfoComponent implements OnInit {
  constructor(
    private testRootServices: TestRootServices,
    private route: ActivatedRoute
  ) {}

  rootColor: string;

  newColorName: string;

  params: string;
  queryString: object;
  cart = [];

  ngOnInit() {
    this.rootColor = this.testRootServices.getColor();
    this.getAllColors();
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
  
  public createColorInCart() {
    if (!this.newColorName) return 
    this.newColorName = this.newColorName.trim(); //頭尾去空白
    this.testRootServices.addToCart({
      name: this.newColorName,
      id: new Date().getTime().toString()
    });
    this.newColorName = '';
    this.getAllColors();
  }

  public removeColorInCart(id) {
    this.testRootServices.clearCart(id);
    this.getAllColors();
  }

  public getAllColors () {
    this.cart = this.testRootServices.getCart();
  }

}