import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MagazinsService } from 'src/app/magazins.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  magazins:any[] = [];


  prodAddForm = new FormGroup({
    title: new FormControl('',Validators.required),
    ref: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    idmagazin: new FormControl('',Validators.required),

 
    
  })
  constructor(private magazinsService:MagazinsService, private prodService:ProductsService) { }

  ngOnInit(): void {
    this.getMagazinsList();
  }

  getMagazinsList(){
    this.magazinsService.getMagazinsList().subscribe((data:any[])=>{
      this.magazins = data;
    })
  }


  back(){
    window.history.back();
  }


  saveProduct(){
    const body = this.prodAddForm.value;

    this.prodService.addNewProduct(body).subscribe((data:any)=>{
      if (data.success) {
        this.back();
      }
      
    })

    

  }
}
