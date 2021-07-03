import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MagazinsService {

  constructor(private http:HttpClient) { }


  getMagazinsList(){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };


    return this.http.get(environment.server+'/magazins/list',httpOptions);
  }
}
