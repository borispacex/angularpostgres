import { Component, OnInit } from '@angular/core';
import { FotografiasService } from 'src/app/services/fotografias.service';
import { AuthService } from 'src/app/services/auth.service';
import { GLOBAL } from 'src/app/services/global';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public token: string;
  public fotografias: any [];
  public url: string;

  constructor(private _serviceFotografias: FotografiasService, private _auth: AuthService) { 
    this.token = this._auth.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.getFotografiasAdmin();
  }

  getFotografiasAdmin() {
    this._serviceFotografias.getFotografiasAdmin(this.token)
    .then(response => {
      this.fotografias = response.fotografias;
    })
    .catch( error => {
      console.log(error);
    });
  }

}
