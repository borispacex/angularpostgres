import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardDirectorService implements CanActivate {

  constructor(private _auth: AuthService, private _router: Router) { }

  canActivate() {
    if (this._auth.getIdentity() && this._auth.getIdentity().id_rol === 2) {
      return true;
    } else {
      if (this._auth.getIdentity().id_rol === 1) {
        this._router.navigate(['/admin']);
        return false;
      } else {
        this._router.navigate(['/investigador']);
        return false;
      }
    }
  }
}
