import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice,Content } from './models/models';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private actionUrl = "https://spring-boot-final-work.herokuapp.com/invoices";

  constructor(private http: HttpClient,private authService: AuthService) { }

  getAll(page: number, size: number): Observable<Content>{
    return this.http.get<Content>(this.actionUrl + "?page=" + page + "&size=" + size + "&sort=createdDate",{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)});
  }

  getSingle(id: string): Observable<Invoice> {
      return this.http.get<Invoice>(this.actionUrl + "/get/" +  id,{
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)});
  }

  update(id: string,item: Invoice): Observable<Invoice> {
    return this.http.put<Invoice>(this.actionUrl + "/update/" + id,item,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)});
  }

  upload(formdata:FormData){
    return this.http.post(this.actionUrl + "/upload" ,formdata,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)})
  }

  delete(id: string): Observable<Invoice> {
    return this.http.delete<Invoice>(this.actionUrl + "/delete/" +  id,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)});
  }
}
