import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../Services/Authentication/auth.service';
import { UserInterface } from '../../../../interfaces/user.interface';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertEventService } from '../../../alert/service/alert-event.service';
import {MatDialog} from '@angular/material/dialog';
import { AlertDisplayComponent } from '../../../alert/component/alert-display/alert-display.component';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogINComponent implements OnInit {

  constructor(
    private AuthSvc:AuthService,
    private MyRouter:Router,
    public dialog: MatDialog
  ) { }

  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });

  ngOnInit() {
   
  }
  openDialog(messageSend:string): void {
    const dialogRef = this.dialog.open(AlertDisplayComponent, {
      panelClass: 'my-dialog',
      width: '250px',
      data: {message: messageSend}
    });
  }

  Onlogin(form: UserInterface) {
    this.AuthSvc.loginByEmail(form)
    .then (response =>{
      this.AuthSvc.setEmail(response.user.email);
      this.MyRouter.navigate(['/home']);
    }).catch(err => this.openDialog(err));
  }

}
