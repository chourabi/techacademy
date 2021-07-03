import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  purchases:any[]=[];
  clients:any[]=[];
  
  isLoading = true;
  errMessage="";

  constructor(private ps:ProductsService) { }

  ngOnInit(): void {
    this.getPurchases();
    this.getClientsList();
  }


  getPurchases(){
    this.ps.getAllPurchases().subscribe((data:any[])=>{
      console.log(data);

      this.purchases = data;
      this.isLoading = false
    })
  }


  getClientsList(){
    this.ps.getClientsList().subscribe((data:any)=>{
      this.clients = data;
    })
  }

  updateList(e){
    const id = e.target.value;

    if (id == '-1') {
      this.getPurchases();
    } else {
      
    this.isLoading = true;
    this.ps.getAllPurchases().subscribe((data:any[])=>{
      console.log(data);

      this.purchases = data.filter( (p)=> p.client.id == id  );
      this.isLoading = false
    })
    }

  }
}
