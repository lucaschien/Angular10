import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactusRoutingModule } from './contactus-routing.module';
import {
  ContactusComponent,
  UserNameInputComponent,
  UserPhoneInputComponent
} from './contactus.component';
import { UnitMenuModule } from '../../components/UnitMenu/unit-menu.component';
import { PhoneValidateDirective } from '../../direactives/phoneValidate/phone-validate.directive';

@NgModule({
  declarations: [
    ContactusComponent,
    UserNameInputComponent,
    UserPhoneInputComponent,
    PhoneValidateDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ContactusRoutingModule,
    UnitMenuModule,
  ]
})
export class ContactusModule { }
