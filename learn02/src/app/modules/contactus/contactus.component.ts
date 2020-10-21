import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormControl, FormGroup, Validators } from '@angular/forms';

// 實驗 "響應式表單" 的用法 <--- html 比較簡潔, 要注意 controller 的變數名稱與欄位的 name 不可衝突
@Component({
  selector: 'app-user-name-input-component',
  template: `
    <h5>響應式表單的用法</h5>
    <form (ngSubmit)="onSubmit()" [formGroup]="testForm">
      <label>姓名: <input type="text" formControlName="userName" required></label>
      <span *ngIf="user_name.invalid && (user_name.dirty || user_name.touched)">
        <i *ngIf="user_name.errors.required">必填</i>
      </span>
      <button type="submit" [disabled]="!testForm.valid">送出</button>
      <button type="button" (click)="testForm.reset()">重設表單</button>
    </form>
  `
})
export class UserNameInputComponent implements OnInit  {
  constructor() {}
  testForm: FormGroup;
  userName: String = '1234';
  onSubmit(): void {
    console.log('響應式表單的用法...', this.testForm.valid);
    console.log('響應式表單的用法...', this.testForm.value);
  }
  ngOnInit(): void {
    this.testForm = new FormGroup({
      'userName': new FormControl(this.userName, [Validators.required]),
    });
    // 實驗過幾秒之後給予表單值
    setTimeout(() => {
      this.testForm.setValue({
        userName: '5678'
      });
    }, 3000);
  }
  // 即時取得 userName 欄位的驗證狀態
  get user_name() {
    return this.testForm.get('userName');
  }
}

// 實驗 "範本驅動表單" 的用法 <--- html部分比較不簡潔, 但是比較接近傳統的用法
@Component({
  selector: 'app-user-phone-input-component',
  template: `
    <h5>範本驅動表單的用法</h5>
    <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>

      <label>電話:
        <input type="text"
          name="userPhone"
          ngModel
          #userPhone="ngModel"
          required>
      </label>

      <span *ngIf="userPhone.invalid && (userPhone.dirty || userPhone.touched)">
        <i *ngIf="userPhone.errors.required">必填</i>
      </span>

      <button type="submit" [disabled]="!f.valid">送出</button>
      <button type="button" (click)="f.reset()">重設表單</button>
    </form>
  `
})
export class UserPhoneInputComponent implements OnInit {
  onSubmit(f: NgForm): void {
    console.log('範本驅動表單的用法 ....', f.valid);
    console.log('範本驅動表單的用法 ....', f.value);
  }
  ngOnInit(): void {
    setTimeout(() => {
      console.log('範本驅動表單...', this);
    }, 3000);
  }
}

// 聯絡我們單元的大組件
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  constructor() {}

  // model
  title = '聯絡我們';
  // 提醒避免跟 template 上面的#欄位名稱衝突, 使用一層物件當作 [(ngModel)] 的欄位資料綁定
  formModel = {
    userName: 'aaaa',
    userPhone: null
  };

  // methods
  onSubmit(f: NgForm): void {
    console.log('onSubmit f.form.value....', f.form);
    console.log('onSubmit f.form.value....', f.form.value);
    console.log('onSubmit this.formModel....', this.formModel);
  }

  ngOnInit(): void {}

}
