import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule,
  MatInputModule,
  MatDialogModule,
  MatProgressBarModule,
  MatExpansionModule

} from '@angular/material';

const modules = [
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule,
  MatInputModule,
  MatDialogModule,
  MatProgressBarModule,
  MatExpansionModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports:[
    modules
  ]
})
export class MaterialModuleModule { }
