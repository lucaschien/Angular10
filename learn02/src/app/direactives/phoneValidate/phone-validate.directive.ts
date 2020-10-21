import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

// 自訂非同步驗證器
@Directive({
  selector: '[appPhoneValidate]',
  providers: [{provide: NG_VALIDATORS, useExisting: PhoneValidateDirective, multi: true}],
})
export class PhoneValidateDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    // console.log('control', control);
    return (!/^09[0-9]{8}$/.test(control.value)) ? { phoneValidate: true } : null;
  }
}
