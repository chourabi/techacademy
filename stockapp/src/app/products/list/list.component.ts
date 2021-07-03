import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products:any[] = []
  errMessage="";
  isLoading = true;

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }


  getAllProducts(){
    this.productsService.getProductsList().subscribe((data:any[])=>{
      console.log(data);
      this.products = data;
      this.isLoading = false;
    },(err)=>{
      this.isLoading = false;
      this.errMessage="Oups something went wrong try again."
    })
  }


  deleteProd(id,name){
    if (confirm('Do you really want to delete this product :'+name)) {
      this.productsService.deleteProduct(id).subscribe((data:any[])=>{
        
        this.getAllProducts();
        
      },(err)=>{
        this.isLoading = false;
        this.errMessage="Oups something went wrong try again."
      })
    }
  }


}
