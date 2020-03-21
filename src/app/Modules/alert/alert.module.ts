import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDisplayComponent } from './component/alert-display/alert-display.component';
import { MaterialModuleModule } from '../../material-module/material-module.module';


@NgModule({
  declarations: [AlertDisplayComponent],
  imports: [
    CommonModule,
    MaterialModuleModule
  ],
  exports:[
    AlertDisplayComponent
  ]
})
export class AlertModule { }
