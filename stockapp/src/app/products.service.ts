import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http:HttpClient) { }


  getProductsList(){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };


    return this.http.get(environment.server+'/products/list',httpOptions);
  }

  getProductByID(id){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };


    return this.http.get(environment.server+'/products/list/'+id,httpOptions);
  }


  addNewProduct(body){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };


    return this.http.post(environment.server+'/products/add',body,httpOptions);
  }


  editProduc(body,id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };


    return this.http.post(environment.server+'/products/update/'+id,body,httpOptions);
  }



  deleteProduct(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };


    return this.http.delete(environment.server+'/products/delete/'+id,httpOptions);
  }




  getAllPurchases(){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };


    return this.http.get(environment.server+'/purchases/list',httpOptions);
  }


  getClientsList(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };


    return this.http.get(environment.server+'/clients/list',httpOptions);
  }


}
