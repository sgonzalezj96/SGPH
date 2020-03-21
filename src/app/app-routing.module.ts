import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewListComponent } from './Components/new-list/new-list.component';
import {FireGuard} from './Services/guard/fire.guard';
const routes: Routes = [
  {path:'' , loadChildren: () => import(`./Modules/login/login.module`).then(m => m.LoginModule)},
  {path:'home', loadChildren: () => import(`./Modules/home/home.module`).then(m => m.HomeModule), canActivate: [FireGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
