import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/api/auth.service';
import { MatGridList } from '@angular/material/grid-list';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('grid') grid: MatGridList;

  toSignup(){
    this.router.navigate(['signup']);
  }

  toHome(){
    this.router.navigate(['home']);
  }

  toDashboard(){
    this.router.navigate(['dashboard']);
  }
  constructor(private router: Router,public auth: AuthService,private observableMedia: MediaObserver) { }
  ngAfterViewInit(): void {
  }
}
