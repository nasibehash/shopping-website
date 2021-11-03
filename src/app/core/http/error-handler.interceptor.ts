import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

import { Logger } from './logger.service';
import { environment } from 'env/environment';

const log = new Logger('ErrorHandlerInterceptor');

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(

  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
          // this.commonService.loading = false;
        }
      }),
      catchError((error) => this.errorHandler(error))
    );
  }

  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    if (!environment.production) {
      // Do something with the error
      const error: any = response;
      // this.notificationService.openSnackBar(error.error.message);
      if (error.error.statusCode === 401) {
        // this.authenticationService.signOut();
        location.reload();
      }

      log.error('Request error', response);
    }
    throw response;
  }
}
