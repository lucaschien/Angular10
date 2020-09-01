import { Component } from '@angular/core';

@Component({
  selector: 'test-slot-comp',
  templateUrl: './testSlot.component.html',
  styleUrls: ['./testSlot.component.scss'],
  providers: []
})

export class TestSlotComponent {
  constructor () {}
  
  // TODO... 這個練習 slot 的部分, 還可以研究將 data 帶給外部的那種需求.
  // TODO... 還可以練習, 外部有使用 slot 就使用外部的html, 沒使用就用自己預設的html

}