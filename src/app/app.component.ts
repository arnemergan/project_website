import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../app/api/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(){
  }

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
