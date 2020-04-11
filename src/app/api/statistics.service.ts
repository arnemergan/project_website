import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Statistics } from './models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private actionUrl = "https://spring-boot-final-work.herokuapp.com/statistics";

  constructor(private http: HttpClient,private authService: AuthService) { }

  getStats(): Observable<Statistics>{
    return this.http.get<Statistics>(this.actionUrl,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)});
  }
}
