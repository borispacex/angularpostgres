import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FotografiasService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  getFotografias() {
    return this._http.get(this.url + 'fotografias').toPromise()
      .then(res => res.json());
  }
  getFotografiasAdmin(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'fotografias-admin', options).toPromise()
      .then(res => res.json());
  }
  // guardar una fotografia
  save(fotografia: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'fotografia', fotografia, options).toPromise()
      .then(res => res.json());
  }
  // actualizar fotografia
  update(id: number, fotografia: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'fotografia/' + id, fotografia, options).toPromise()
      .then(res => res.json());
  }
  //mostrar fotografia por ID
  getFotografiasById(id: number) {
    return this._http.get(this.url + 'fotografia/' + id).toPromise()
      .then(res => res.json());
  }
}
