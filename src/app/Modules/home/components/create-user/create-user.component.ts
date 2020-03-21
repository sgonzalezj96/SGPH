import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../Services/Authentication/auth.service';
import { UserInterface } from '../../../../interfaces/user.interface';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertEventService } from '../../../alert/service/alert-event.service';
import {MatDialog} from '@angular/material/dialog';
import { AlertDisplayComponent } from '../../../alert/component/alert-display/alert-display.component';
import { FirestoreService } from '../../../../Services/firestore/firestore.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(
    private AuthSvc:AuthService,
    private MyRouter:Router,
    public dialog: MatDialog,
    private firebaseSvc: FirestoreService,
    private route:Router
  ) { }

  CreateForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    apto: new FormControl('',Validators.required)
  });

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

  CreateUser(form: UserInterface) {
    const { email, password, name, apto } = form;
    this.AuthSvc.createUser(email,password)
    .then (response =>{
      let uid = response.user.uid;
      this.firebaseSvc.createUser(uid,name,apto);
      this.openDialogsucces("Usuario Creado con éxito");
      this.route.navigate(['/home']);
    }).catch(err => this.openDialog(err));
  }

}
