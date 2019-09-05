import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // obtener el JSON cuando ingresa por login
  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity_user'));
    if (identity) {
      return identity;
    } else {
      return null;
    }
  }
  getToken() {
    let token = localStorage.getItem('token');
    if (token) {
      return token;
    } else {
      return null;
    }
  }
  // salir
  logOut() {
    localStorage.removeItem('identity_user');
    localStorage.clear();
  }
}
