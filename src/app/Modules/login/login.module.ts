import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from '../../material-module/material-module.module';
import { LoginRoutingModule } from './login-routing.module';
import { LogINComponent } from './component/log-in/log-in.component';
import { AuthService } from '../../Services/Authentication/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from '../alert/alert.module';
import {MatDialogModule} from '@angular/material/dialog'
import { AlertDisplayComponent } from '../alert/component/alert-display/alert-display.component';

@NgModule({
  declarations: [LogINComponent],
  entryComponents:[
    AlertDisplayComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    AlertModule,
    MatDialogModule
  ],
  providers:[
    AuthService
  ]
})
export class LoginModule { }
