//這一支是我練習掛載到root的服務

//讓所有組件不用特地import就可以使用此服務的方法 <--- angular沒有這種用法,每一個組件或module都要自己import

/* { providedIn: 'root' } 意思是類別建立的實體是掛在 root 上, 
  因此每一個組件在import的時後, 不會在該組件中建立實體.
*/

import { Injectable } from '@angular/core';

interface CartInterface {
  id: string;
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class TestRootServices {
  constructor() {}

  public color: string = 'blue';

  //定義購物車資料集合
  public cart: CartInterface[] = [];


  public getColor(): string {
    return this.color;
  }
  public setColor(color: string): void {
    this.color = color;
  }

  public addToCart(obj) {
    console.log('obj....', obj);
    if (obj.id && obj.name) {
      this.cart.push(obj);
    }
  }

  public clearCart(id) {
    this.cart = this.cart.filter((item) => {
      return item.id !== id
    });
  }

  public getCart(): CartInterface[] {
    return this.cart
  }



}