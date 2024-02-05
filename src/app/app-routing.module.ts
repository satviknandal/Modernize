import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orders', component: DashboardComponent },
  { path: 'products', component: DashboardComponent },
  { path: 'categories', component: DashboardComponent },
  { path: 'customers', component: DashboardComponent },
  { path: 'reports', component: DashboardComponent },
  { path: 'coupons', component: DashboardComponent },
  { path: 'inbox', component: DashboardComponent },
  { path: 'knowledge-base', component: DashboardComponent },
  { path: 'product-updates', component: DashboardComponent },
  { path: 'personal-settings', component: DashboardComponent },
  { path: 'global-settings', component: DashboardComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
