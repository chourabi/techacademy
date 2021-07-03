import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MagazinsService } from 'src/app/magazins.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  magazins:any[] = [];
  id;


  prodAddForm = new FormGroup({
    title: new FormControl('',Validators.required),
    ref: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    idmagazin: new FormControl('',Validators.required),

 
    
  })
  constructor(private magazinsService:MagazinsService, private prodService:ProductsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.getMagazinsList();

    this.getProductDetails();
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

    this.prodService.editProduc(body,this.id).subscribe((data:any)=>{
      if (data.success) {
        this.back();
      }
      
    })

    

  }


  getProductDetails(){
    this.prodService.getProductByID(this.id).subscribe((data:any)=>{

      console.log(data);

      

      const patch = data;
 
      patch.ref = patch.code

      delete patch.code;
      delete patch.id;


      this.prodAddForm.setValue( patch );


    })
  }
}
