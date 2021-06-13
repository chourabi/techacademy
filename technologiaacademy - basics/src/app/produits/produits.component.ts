import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits = [
    { id: "15" , title:"SAMSUNG A70",description:"ertyuio",price:"1880",city:"tounes" },
    { id: "16" , title:"SAMSUNG A30",description:"ertyuio",price:"1880",city:"tounes" },
    
    
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  goTo(e,p){
    e.preventDefault();
    //console.log(p);
    //this.router.navigateByUrl('/produits/'+p.id)
    this.router.navigate(['/produits/'+p.id, p ])
    
  }

}
