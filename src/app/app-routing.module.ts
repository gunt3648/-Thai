import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewLogComponent } from './components/viewlog/viewlog.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AccountManagementComponent } from './components/account-management/account-management.component';
import { AuthGuardService as EmpAuthGuard } from './services/auth-guard/auth-guard.service';
import { AuthGuardManagerService as MgrAuthGuard } from './services/auth-guard-manager/auth-guard-manager.service';

const routes: Routes = [
  { path: '', component: LoginPageComponent, pathMatch: 'full' },
  { path: 'home', component: EmployeeComponent, pathMatch: 'full', canActivate: [EmpAuthGuard] },
  { path: 'view-log', component: ViewLogComponent, pathMatch: 'full', canActivate: [EmpAuthGuard] },
  { path: 'account-management', component: AccountManagementComponent, pathMatch: 'full', canActivate: [MgrAuthGuard] },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
