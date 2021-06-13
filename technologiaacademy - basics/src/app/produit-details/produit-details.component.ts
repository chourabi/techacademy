import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit {

  produit;
  
  constructor( private route:ActivatedRoute ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    
    
  }

}
