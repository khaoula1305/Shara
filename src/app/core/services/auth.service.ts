import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  userLoggedIn = false;
  constructor(private http: HttpClient) {}

  isUserLoggedIn() {
    return this.userLoggedIn;
  }
}
