import { Component } from '@angular/core';

@Component({
  selector: 'indexView',
  templateUrl: './indexView.component.html',
  styleUrls: ['./indexView.component.scss'],
})
export class IndexViewComponent {

  testName: string = 'aaaa';

  public getMyTestNamr(result):void {
    console.log(result + '  <<<< 子層呼叫父層的方法.');
  }

  // 提供測試 testSlot.component.ts 組件用的data
  public slotUseDataModel = {
    userName: 'lucas',
    height: 180,
    color: 'yellow'
  };

}
