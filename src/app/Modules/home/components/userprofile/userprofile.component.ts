import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../Services/Authentication/auth.service';
import { FirestoreService } from '../../../../Services/firestore/firestore.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  public email:string = null;
  public uid:string ="";
  public name:string ="No ha configurado su nombre";
  public rol:string = "";
  public apto:string ="";
  public foto:string ="";
  public userdata=[];

  constructor(
    private AuthSvc:AuthService,
    private firesvc:FirestoreService,
    private fauth:AngularFireAuth,
    private sanitizer:DomSanitizer
  ) { }

  ngOnInit() {

  this.fauth.authState.subscribe( authState => {
    this.email = authState.email;
    this.uid = authState.uid;
    this.firesvc.getinfo(this.uid).subscribe(response => {
      this.userdata.push({
        id: response.payload.id,
        data: response.payload.data()
      });
    this.rol=this.userdata[0].data.rol;
    this.name=this.userdata[0].data.nombre;
    this.apto=this.userdata[0].data.apartamento;
    this.foto=this.userdata[0].data.foto;
    });
  });
  }
  transform(resource:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(resource);
  }
  
  
 
}
