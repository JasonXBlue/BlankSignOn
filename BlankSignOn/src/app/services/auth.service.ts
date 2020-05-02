import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === 'test@test.com' && password === 'password') {
      this.isAuthenticated = true;
      return true;
    }

    return false;
  }
}
