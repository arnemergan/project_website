import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceDataComponent } from './dashboard/elements/invoice-data/invoice-data.component';
import { InvoicesComponent } from './dashboard/elements/invoices/invoices.component';
import { StatisticsComponent } from './dashboard/elements/statistics/statistics.component';
import { AuthGuard } from './auth.guard';
import { CallbackComponent } from './dashboard/elements/callback/callback.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard',pathMatch: 'full'},
  {path:'callback',component:CallbackComponent},
  {path: 'dashboard',component: DashboardComponent,canActivate: [AuthGuard]},
  {path: 'invoices',component: InvoicesComponent,canActivate: [AuthGuard]},
  {path: 'statistics',component:StatisticsComponent,canActivate: [AuthGuard]},
  {path: 'invoice/:id',component: InvoiceDataComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
