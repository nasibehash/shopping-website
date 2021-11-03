import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isLoggedIn) {
      request = request.clone({
        setHeaders: {
          Accept: 'application/json',
          Authorization: `Bearer ${this.authService.token}`,
        },
      });
    } else {
      request = request.clone({
        setHeaders: {
          Accept: 'application/json',
        },
      });
    }
    return next.handle(request);
  }
}
