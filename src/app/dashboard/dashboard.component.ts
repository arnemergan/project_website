import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */

  constructor(private router: Router,public auth: AuthService){}

  toInvoices(){
    this.router.navigate(['invoices']);

  }

  toStatistics(){
    this.router.navigate(['statistics']);
  }

  toHome(){
    this.router.navigate(['dashboard']);
  }
}
