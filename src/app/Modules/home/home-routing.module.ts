import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewListComponent } from '../../Components/new-list/new-list.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CambiarfotoPerfilComponent } from './components/cambiarfoto-perfil/cambiarfoto-perfil.component';
import { CrearNoticiaComponent } from './components/crear-noticia/crear-noticia.component';
import {FireGuard} from '../../Services/guard/fire.guard';
const routes: Routes = [
  {
    path:'', 
    component: DashboardComponent,
    children:[
      {path:'', component:NewListComponent},
      {path:'CreateUser', component:CreateUserComponent},
      {path:'cambiarfoto', component:CambiarfotoPerfilComponent},
      {path:'crearnoticia', component:CrearNoticiaComponent},

    ],
    canActivate: [FireGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
