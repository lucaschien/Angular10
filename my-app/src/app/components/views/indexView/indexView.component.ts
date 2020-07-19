import { Component } from '@angular/core';

@Component({
  selector: 'indexView',
  templateUrl: './indexView.component.html',
  styleUrls: ['./indexView.component.scss'],
})
export class IndexViewComponent {

  testName: string = 'aaaa';

  public getMyTestNamr(result):void {
    console.log(result);
  }

}
