import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-unit-menu',
  templateUrl: './unit-menu.component.html',
  styleUrls: ['./unit-menu.component.scss']
})
export class UnitMenuComponent {
  constructor() {}
}

@NgModule({
  imports: [RouterModule],
  declarations: [UnitMenuComponent],
  exports: [UnitMenuComponent]
})
export class UnitMenuModule {}
