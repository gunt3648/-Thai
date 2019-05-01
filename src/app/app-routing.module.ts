import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'under-construct', pathMatch: 'full' },
  // { path: 'under-construct', component: UnderConstructComponent, pathMatch: 'full' },
  // { path: 'temp-monitor', component: TempMonitoringComponent, pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
