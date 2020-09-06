import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { UnitMenuModule } from '../../components/UnitMenu/unit-menu.component';

/** 筆記用 lazy load 的方式整體結構如下:
 *                               ↗︎ routingModule ➝ IndexComponent
 *  app主roution ➝ 各單元 module ⊣
 *                               ↘︎ component     ➝ IndexComponent
 */

@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    UnitMenuModule
  ]
})
export class IndexModule {

}
