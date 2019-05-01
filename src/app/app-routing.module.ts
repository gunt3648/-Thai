import { ViewlogComponent } from './component/viewlog/viewlog.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employee', component:EmployeeComponent, pathMatch: 'full' },
  { path: 'viewlog', component:ViewlogComponent, pathMatch: 'full' },
  // { path: 'temp-monitor', component: TempMonitoringComponent, pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
