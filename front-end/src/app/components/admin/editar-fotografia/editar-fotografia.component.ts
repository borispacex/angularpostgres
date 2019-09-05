import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FotografiasService } from 'src/app/services/fotografias.service';
import { AuthService } from 'src/app/services/auth.service';
import { GLOBAL } from 'src/app/services/global';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-editar-fotografia',
  templateUrl: './editar-fotografia.component.html',
  styleUrls: ['./editar-fotografia.component.css']
})
export class EditarFotografiaComponent implements OnInit {

  public fotografia: any = {};
  public image_selected: string;
  public token: string;
  public filesToUpload: Array<File>;
  public url: string;

  constructor(private _route: ActivatedRoute, private _serviceFotografias: FotografiasService, private _auth: AuthService, private _upload: UploadService, private _router: Router) { }

  ngOnInit() {
    this.getFotografia();
    this.token = this._auth.getToken();
    this.url = GLOBAL.url;
  }

  getFotografia() {
    this._route.params.forEach((params: Params) => {
      this._serviceFotografias.getFotografiasById(params['id'])
      .then(response => {
        this.image_selected = response.fotografia.imagen;
        this.fotografia = response.fotografia;
      })
      .catch(error => {
        console.log(error);
      });
    });
  }
  editar() {
    this._serviceFotografias.update(this.fotografia.id, this.fotografia, this.token)
    .then(response => {
      if (this.filesToUpload) {
        this._upload.upload(this.url + 'upload-fotografia/' + response.fotografia.id, this.filesToUpload, this.token)
        .then(fotografias => {
          console.log('imagen actualizada correctamente', fotografias);
          this._router.navigate(['/admin/list']);
        })
        .catch(error => {
          console.log(error);
        });
      } else {
        this._router.navigate(['/admin/list']);
      }
    })
    .catch( error => {
      console.log(error);
    });
  }
  fileChangeEvent(fileInput: any) {
    this.filesToUpload =
      fileInput.target.files.length > 0
        ? <Array<File>>fileInput.target.files
        : null;
    this.image_selected = this.filesToUpload
      ? fileInput.target.files[0].name
      : '';
  }

}
