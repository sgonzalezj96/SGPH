import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NewListComponent } from '../../Components/new-list/new-list.component';
import { FirestoreService } from '../../Services/firestore/firestore.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from '../../material-module/material-module.module';
import { AngularFirestore } from '@angular/fire/firestore';
import { TopToolBarComponent } from '../../Components/top-tool-bar/top-tool-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from '../alert/alert.module';
import { AlertDisplayComponent } from '../alert/component/alert-display/alert-display.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { CambiarfotoPerfilComponent } from './components/cambiarfoto-perfil/cambiarfoto-perfil.component';
import { CrearNoticiaComponent } from './components/crear-noticia/crear-noticia.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import {FireGuard} from '../../Services/guard/fire.guard';
@NgModule({
  declarations: [
    NewListComponent,
    TopToolBarComponent,
    DashboardComponent,
    CreateUserComponent,
    UserprofileComponent,
    CambiarfotoPerfilComponent,
    CrearNoticiaComponent,
    InformacionComponent,
  ],
  entryComponents:[
    AlertDisplayComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    AlertModule
  ],
  providers:[
    FirestoreService,
    AngularFirestore,
    FireGuard
  ]
})
export class HomeModule { }
