import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }
  //Crea una nueva noticia
  public createNew(data: {nombre: string, url: string}) {
    return this.firestore.collection('noticias').add(data);
  }
  //Obtiene una noticia
  public getNew(documentId: string) {
    return this.firestore.collection('noticias').doc(documentId).snapshotChanges();
  }
  //Obtiene todas las noticias
  public getNews() {
    return this.firestore.collection('noticias').snapshotChanges();
  }
  //Actualiza una noticia
  public updateNew(documentId: string, data: any) {
    return this.firestore.collection('noticias').doc(documentId).set(data);
  }
  public createUser(uid:string,name:string,apto:string) {
    const profile = 
    { nombre:name,
      rol:'Habitante',
      apartamento:apto,
      foto:"https://firebasestorage.googleapis.com/v0/b/propiedad-horizontal-6258e.appspot.com/o/fotos%2Fprofile_user.png?alt=media&token=5c9bf11a-ef93-4fc0-ae97-fa828e5673bd"
    };
    return this.firestore.collection('profiles').doc(uid).set(profile);
  }
  public getinfo(uid:string) {
    return this.firestore.collection('profiles').doc(uid).snapshotChanges();
  }
}
