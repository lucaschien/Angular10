import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { HttpResponseInterface } from './HttpResponseInterface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor( private http: HttpClient ) {}

  ajaxCount = 0; // 統計已發送尚未 response 的 ajax 數量用

  post<data>(path: string, parm: any): Observable<HttpResponseInterface> {
    this.ajaxCount++; // 發送前+1
    return this.http.post<HttpResponseInterface>(path, parm).pipe(
      tap((_) => {
        // console.log(_);
        this.ajaxCount--; // response-1
        // console.log('this.ajaxCount ', this.ajaxCount);
      })
    );
  }
}
