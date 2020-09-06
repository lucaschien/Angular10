import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../commonServices/http.service';

@Component({
  selector: 'app-index-view',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  constructor(
    private httpService: HttpService,
  ) {}

  title = '首頁...';

  ngOnInit(): void {
    // 實驗觀看已經發送的ajax次數
    console.log(this.httpService.ajaxCount);

  }
}
