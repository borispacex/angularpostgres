import { Component, OnInit } from '@angular/core';
import { FotografiasService } from 'src/app/services/fotografias.service';
import { AuthService } from 'src/app/services/auth.service';
import { UploadService } from 'src/app/services/upload.service';
import { GLOBAL } from 'src/app/services/global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-fotografia',
  templateUrl: './nueva-fotografia.component.html',
  styleUrls: ['./nueva-fotografia.component.css']
})
export class NuevaFotografiaComponent implements OnInit {

  public fotografia: any = {};
  public token: string;
  public filesToUpload: Array<File>;
  public image_selected: string;
  public url: string;

  constructor(private _serviceFotografias: FotografiasService, private _auth: AuthService, private _upload: UploadService, private _router: Router) {
    this.token = this._auth.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit() {
  }

  agregar() {
    this.fotografia.usuario_creacion = this._auth.getIdentity().usuario;
    this._serviceFotografias.save(this.fotografia, this.token)
    .then(response => {
      if (this.filesToUpload) {
        this._upload.upload(this.url + 'upload-fotografia/' + response.fotografias.id, this.filesToUpload, this.token)
        .then(fotografias => {
          console.log('guardado correctamente', fotografias);
          this._router.navigate(['/admin/list']);
        })
        .catch(error => {
          this._router.navigate(['/admin/list']);
          console.log(error);
        });
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
