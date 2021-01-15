// 這一支是我練習一般服務(非root)

import { Injectable } from '@angular/core';

@Injectable()
export class UtilsServices {

  public logMsg (msg: string):void {
    //alert(msg);
    console.log('logMsg...', msg);
  }
  
}