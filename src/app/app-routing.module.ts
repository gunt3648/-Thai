import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewLogComponent } from './components/viewlog/viewlog.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard/auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginPageComponent, pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'view-log', component: ViewLogComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
