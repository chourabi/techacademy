import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*title = "first session";
  thisYear = 2021;
  fruits = ['apples','pinaples','peach','water melone'];

  employee1 = {
    "fullname":"chourabi taher",
    "phonenumber":"93863732",
    "email":"tchourabi@gmail.com",
    "address":{
      "zipcode":"0000",
      "ville":"tunis",
    }
  };


  employees = [
    this.employee1,
    this.employee1,
    this.employee1,
    this.employee1,
    this.employee1,
    
  ];
  */

  /************************** */

  /*
  imgURL ='https://tesla-cdn.thron.com/delivery/public/image/tesla/56cb8c41-e898-44ce-b6b7-fe9b9a05f529/bvlatuR/std/1200x628/MS-Social';
  description = '<strong>Lorem</strong> ipsum dolor sit, amet consectetur adipisicing elit. Eos nihil, suscipit numquam cum porro assumenda nemo saepe, accusamus voluptatum at voluptate natus tempore adipisci fuga neque earum minus repudiandae modi!';

  canClickOnButton = false;

  success = false;


  updateState(e){
    this.success = ! this.success;
    
  }

  */


  /************ list feeds************ */
/*
  feeds = [
    { title:"exmpl title", description:'exmpl description', likes:15 , didLike : false  },
    { title:"exmpl title", description:'exmpl description', likes:16  , didLike : true },
    { title:"exmpl title", description:'exmpl description', likes:0  , didLike : false },
    
  ];

  incrementLikes( index ){
    if (this.feeds[index].didLike == false) {
      this.feeds[index].likes++;
    }else{
      this.feeds[index].likes--;
    }

    this.feeds[index].didLike = ! this.feeds[index].didLike;
  }
*/

/*
products = [
  { title:"Samsung a70", price:"1200", category:"SMARTPHONE" , addDate: new Date() },
  { title:"iphone 12", price:"3000", category:"SMARTPHONE", addDate: new Date() },
  { title:"oppo", price:"700", category:"SMARTPHONE", addDate: new Date() },
  { title:"TV LG 50", price:"1700", category:"TV", addDate: new Date() },
  { title:"LG PHONE", price:"1700", category:"SMARTPHONE", addDate: new Date() }
  
]

productsToSearchIn = [
  { title:"Samsung a70", price:"1200", category:"SMARTPHONE" , addDate: new Date() },
  { title:"iphone 12", price:"3000", category:"SMARTPHONE", addDate: new Date() },
  { title:"oppo", price:"700", category:"SMARTPHONE", addDate: new Date() },
  { title:"TV LG 50", price:"1700", category:"TV", addDate: new Date() },
  { title:"LG PHONE", price:"1700", category:"SMARTPHONE", addDate: new Date() }
  
  
]

key="";
category="all";

keyPress(e){
  const value = e.target.value;
  this.key = value;
  this.search();
}
listUpdated(e){ 
  const value = e.target.value;
  this.category = value;

  this.search();
}


search(){
  let result = [];
  
    for (let i = 0; i < this.products.length; i++) {
      const p = this.products[i];
      
      if ((p.title+' '+p.price).toLowerCase().indexOf( this.key.toLowerCase() ) != -1)  {
        if (this.category !='all') {
          if (p.category == this.category) {
            result.push(p);
          }
        }else{
          result.push(p);
        }
      }
    }
  
  this.productsToSearchIn = result;
  
}*/




/********************* forms ******************** */


/*
authForm = new FormGroup({
  // key:values
  username: new FormControl('',Validators.required),
  password: new FormControl('',Validators.required),
  email: new FormControl('',Validators.email),
});


connectNow(){
  const authValues = this.authForm.value;

  console.log(authValues);

  const authFormStatus = this.authForm.valid;

  console.log(authFormStatus);


  console.log(this.authForm);
  
  
  
  
}

*/


/*************forms 2******** */

/*
products = [
  { id:"1", name:"pizza" , options:[ { id:"1",name:"thon", selected:false, },{ id:"2",name:"fromage", selected:false, },{ id:"3",name:"jombon", selected:false, } ] },
  { id:"2", name:"tacos", options:[ { id:"4",name:"frise", selected:false, },{ id:"5",name:"fromage", selected:false, },{ id:"6",name:"coke", selected:false, } ] }
]

ordre = new FormGroup({
  id_product : new FormControl('')
})


options = [];



//order to send { idProduct:"xxx", options:[x,x,x,x] }
 


 placeOrdre(){
   const idProduit = this.ordre.value.id_product;
   let chosenOptions = this.options.filter((p)=> p.selected == true)


   const ordre = {
     id_produit : idProduit,
     options:chosenOptions
   }

   console.log(ordre);
   
   
   
 }

 updateOptionStat(i){
   this.options[i].selected = ! this.options[i].selected;
 }

 updateOptionList(){
  console.log("changed");
  let search = this.products.filter((p)=> p.id == this.ordre.value.id_product );

  console.log(search);
  this.options = search[0].options;
  



 }*/



 /*************** form3 stepper ************* */

 // create user account
 // step 1 user info
 // step 2 user account
 // step 3 user payment info

 step = 0;

 accountForm = new FormGroup({

  first : new FormGroup({
    username: new FormControl('',Validators.required),
    displayname: new FormControl('',Validators.required),
  }),
  second: new FormGroup({
    password: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
  
  }),
  third: new FormGroup({
    creditcard: new FormControl('',Validators.required),
    expireDate : new FormControl('',Validators.required),
  })
 })



 createUser(){
   console.log(this.accountForm);
   
 }


 next(){
   this.step++;
 }

}
