import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  constructor() { }

  @Input() newsList: any[];
  @Output() getOneList = new EventEmitter();

  // methods
  clickNews(item): void {
    this.getOneList.emit(item);
  }

  ngOnInit(): void {
  }

}
