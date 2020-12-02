import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../commonServices/http.service';

@Component({
  selector: 'app-news-view',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  constructor(
    private httpService: HttpService,
  ) {}

  // model
  title = '最新消息...';
  newsList = [];
  newsDetail = null;

  // methods
  getNewsDetail(item): any {
    // 利用之前學習 node js 的 lucas-studio api 來測 ajax
    const path = 'http://localhost:3200/api/news/detail';
    const parm = { _id: item._id };
    this.httpService.post(path, parm).subscribe((result) => {
      this.newsDetail = result.data.items[0];
    });
  }

  ngOnInit(): void {
    // 利用之前學習 node js 的 lucas-studio api 來測 ajax
    const path = 'http://localhost:3200/api/news/list';
    const parm = {nowPage: 1, limitPage: 5, keyWord: null, sortKey: null, sortType: -1};
    this.httpService.post(path, parm).subscribe((result) => {
      this.newsList = result.data.items;
    });
  }
}
