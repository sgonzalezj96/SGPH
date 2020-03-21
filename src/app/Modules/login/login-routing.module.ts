import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogINComponent } from './component/log-in/log-in.component';

const routes: Routes = [
  {path:'', component: LogINComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
