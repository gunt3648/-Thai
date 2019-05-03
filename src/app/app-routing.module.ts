import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewlogComponent } from './component/viewlog/viewlog.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent, pathMatch: 'full' },
  { path: 'employee', component:EmployeeComponent, pathMatch: 'full' },
  { path: 'viewlog', component:ViewlogComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
