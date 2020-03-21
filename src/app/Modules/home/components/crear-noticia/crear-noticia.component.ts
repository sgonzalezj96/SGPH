import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AlertDisplayComponent } from '../../../alert/component/alert-display/alert-display.component';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { NoticiaInterface } from '../../../../interfaces/noticia.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreService } from 'src/app/Services/firestore/firestore.service';

@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.css']
})
export class CrearNoticiaComponent implements OnInit {
  snapshot: Observable<any>;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  task: AngularFireUploadTask;
  cargando:Boolean =false;
  file:any;
  urlfoto:string = "";
  creadorname:string;
  creadorFoto:string;
  userdata=[];
  fecha = new Date();

  constructor(
    private storage: AngularFireStorage,
    private dialog:MatDialog,
    private firestore: AngularFirestore,
    private fauth:AngularFireAuth,
    private firesvc:FirestoreService,
  ) { }

  CreateForm = new FormGroup({
    titulo: new FormControl('',Validators.required),
    descripcion : new FormControl('',Validators.required),
  });

  ngOnInit() {

    this.fauth.authState.subscribe( authState => {
      this.firesvc.getinfo(authState.uid).subscribe(response => {
        this.userdata.push({
          id: response.payload.id,
          data: response.payload.data()
        });
      this.creadorname=this.userdata[0].data.nombre;
      this.creadorFoto=this.userdata[0].data.foto;
      });
    });

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

  CreateNew(formulario:NoticiaInterface) {
    if(this.urlfoto !== "") {
      const {titulo,descripcion} = formulario;
      const Fecha = this.fecha.toUTCString();
      const data = {
        titulo:titulo,
        descripcion:descripcion,
        imagen:this.urlfoto,
        NombreCreador:this.creadorname,
        FotoCreador: this.creadorFoto,
        fecha:Fecha
      };
      this.firestore.collection('noticias').add(data);
      this.openDialogsucces("Se ha creado la noticia con éxito");
    }else {
      this.openDialog("Debe seleccionar una imagen para la noticia");
    }

  }
  upload(event) {
    this.cargando = true;

    this.file = event.target.files[0];
      // The storage path
      const path = `noticias/${this.file.name}`;

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
              this.urlfoto=url;
              }
            )
          })
      )
      .subscribe()
    this.cargando = true;
  }
  
}
