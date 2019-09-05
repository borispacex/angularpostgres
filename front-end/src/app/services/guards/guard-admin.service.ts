import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardAdminService implements CanActivate {

  constructor(private _auth: AuthService, private _router: Router) { }

  canActivate() {
    if (this._auth.getIdentity() && this._auth.getIdentity().id_rol === 1) {
      return true;
    } else {
      if (this._auth.getIdentity().id_rol === 2) {
        this._router.navigate(['/director']);
        return false;
      } else {
        this._router.navigate(['/investigador']);
        return false;
      }
    }
  }
}
