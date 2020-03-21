import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { AlertDisplayComponent } from '../../../alert/component/alert-display/alert-display.component';

@Component({
  selector: 'app-cambiarfoto-perfil',
  templateUrl: './cambiarfoto-perfil.component.html',
  styleUrls: ['./cambiarfoto-perfil.component.css']
})
export class CambiarfotoPerfilComponent implements OnInit {
  snapshot: Observable<any>;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  task: AngularFireUploadTask;
  cargando:Boolean =false;
  file:any;


  constructor(
    private storage: AngularFireStorage,
    private firesvc:AngularFirestore,
    private fauth:AngularFireAuth,
    private route:Router,
    private dialog:MatDialog
  ) { }

  ngOnInit() {
  }
  openDialog(messageSend:string): void {
    const dialogRef = this.dialog.open(AlertDisplayComponent, {
      panelClass: 'my-dialog',
      width: '250px',
      data: {message: messageSend,title:"Error"}
    });
  }
  openDialogsucces(messageSend:string): void {
    const dialogRef = this.dialog.open(AlertDisplayComponent, {
      panelClass: 'my-dialog-success',
      width: '250px',
      data: {message: messageSend,title:"Éxito"}
    });
  }
  exito() {
    this.openDialogsucces("Se ha cambiado la foto de perfil con éxito");
  }
  updateFoto(fotourl:string) {

    this.fauth.authState.subscribe( authState => {
      this.firesvc.collection('profiles').doc(authState.uid).update({foto:fotourl}).then(() => this.exito());
    });
    this.cargando=false;
  }

  upload(event) {
    this.cargando = true;

    this.file = event.target.files[0];
      // The storage path
      const path = `foto/${this.file.name}`;

      // Reference to storage bucket
      const ref = this.storage.ref(path);
  
      // The main task
      this.task = this.storage.upload(path, this.file);
  
      // Progress monitoring
      this.uploadPercent = this.task.percentageChanges();
    // get notified when the download URL is available
      this.task.snapshotChanges().pipe(
          finalize(() => {
            this.downloadURL = ref.getDownloadURL();
            this.downloadURL.subscribe(url=> {
              console.log("url: "+url);
              this.updateFoto(url);
              }
              )
          })
      )
      .subscribe()

  }

}
