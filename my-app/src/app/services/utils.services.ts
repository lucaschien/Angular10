import { Injectable } from '@angular/core';

@Injectable()

export class UtilsServices {

  public alerMsg (msg: string):void {
    //alert(msg);
    console.log('alerMsg...', msg);
  }
  
} 