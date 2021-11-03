import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) {}

  get me(): Observable<any> {
    return this.user$;
  }

  get isLoggedIn(): Promise<boolean> {
    return this.user$
      .pipe(first())
      .toPromise()
      .then((data) => !!data);
  }

  set token(token: string) {
    localStorage.setItem('token', token);
  }

  get token() {
    return localStorage.getItem('token');
  }

  onLogout(){
    localStorage.removeItem('token');
    this.user$.next(null)
  }

  onLogin(data){
    return this.httpClient.post('', data)
  }

  onRegister(data){
    return this.httpClient.post('', data)
  }
}
