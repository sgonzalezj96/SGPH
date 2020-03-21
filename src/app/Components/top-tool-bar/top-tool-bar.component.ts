import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import { AuthService } from '../../Services/Authentication/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreService } from 'src/app/Services/firestore/firestore.service';

@Component({
  selector: 'app-top-tool-bar',
  templateUrl: './top-tool-bar.component.html',
  styleUrls: ['./top-tool-bar.component.css']
})
export class TopToolBarComponent implements OnInit {
  public userdata=[];
  public autorizado:Boolean =false;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private AuthSvc: AuthService,
    private route: Router,
    private fauth:AngularFireAuth,
    private firesvc:FirestoreService,
  ) {
    iconRegistry.addSvgIcon(
      'home-icon',
      sanitizer.bypassSecurityTrustResourceUrl('../../../assets/home_work-24px.svg'));
   }

  ngOnInit() {
  this.fauth.authState.subscribe( authState => {
    this.firesvc.getinfo(authState.uid).subscribe(response => {
      this.userdata.push({
        id: response.payload.id,
        data: response.payload.data()
      });
    if(this.userdata[0].data.rol === "Administrador") {
      this.autorizado=true;
    }

    });
  });
  }
  logOut() {
    this.AuthSvc.logOut();
    this.route.navigate(['/']);
  }

}
