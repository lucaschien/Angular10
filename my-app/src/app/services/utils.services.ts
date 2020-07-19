import { Injectable } from '@angular/core';

@Injectable()
export class UtilsServices {

  public logMsg (msg: string):void {
    //alert(msg);
    console.log('logMsg...', msg);
  }
  
}