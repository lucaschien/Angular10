import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'test-form-comp',
  templateUrl: './testForm.component.html',
  styleUrls: ['./testForm.component.scss'],
  providers: [],
})

export class TestFormComponent {
  constructor (
    private formBuilder: FormBuilder,
  ) {
    this.conatactForm = this.formBuilder.group({
      user_name: '',
      user_email: '',
      user_say: ''
    });
  }

  //建立表單物件, 使用 FormGroup 型別
  conatactForm: FormGroup; 

  public onSubmit(form) {
    console.log('onSubmit: ', form.value);
    this.conatactForm.reset();
  }

}