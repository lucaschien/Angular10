import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestRootServices } from '../../services/testRoot.services';

@Component({
  selector: 'user-info-comp',
  templateUrl: './userInfo.component.html',
  styleUrls: ['./userInfo.component.scss'],
  providers: [],
})

export class UserInfoComponent implements OnInit {
  constructor(
    private testRootServices: TestRootServices
  ) {

  }

  rootColor: string;

  ngOnInit() {
    this.rootColor = this.testRootServices.getColor();
  }

  public lookRootColor() {
    this.rootColor = this.testRootServices.getColor();
    console.log(this.testRootServices.getColor());
  }

}