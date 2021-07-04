import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  username="Chargement...";

  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
      console.log(data);
      
    },(err)=>{
      alert("oups");
    })


    this.getUserInfo();
    
 
  }


  getUserInfo(){
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':"application/json",
        "authorization":localStorage.getItem('tech-token')
      })
    }

    this.http.get('http://localhost:8080/api/auth/info',httpOptions).subscribe((data:any)=>{
      console.log(data);
      this.username = data.username;
      
    },(err)=>{
      alert("oups");
    })
  }


  

  logout(){
    if (confirm('do you really wanna log out ?')) {
      localStorage.clear();
      this.router.navigateByUrl('/auth');
    }
  }


  goToTheGiftShop(err:boolean){
    var promise = new Promise((resolve,reject)=>{
      setTimeout(() => {
        // todo

        if (err === true) {
          reject({success:false,message:"oups"})
        }else{
          resolve({succes:true, status:"baked"});
        }
        
      }, 6000);
    })

    return promise;
  }
 
}
