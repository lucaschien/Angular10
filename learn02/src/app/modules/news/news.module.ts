import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { UnitMenuModule } from '../../components/UnitMenu/unit-menu.component';
import { NewsListComponent } from './components/news-list/news-list.component';

@NgModule({
  declarations: [
    NewsComponent,
    NewsListComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    UnitMenuModule
  ]
})
export class NewsModule {

}
