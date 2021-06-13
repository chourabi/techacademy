import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  auth = new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    
  })
  errMsg='';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  connect(){
    this.errMsg='';
    const username = this.auth.value.username;
    const password = this.auth.value.password;

    if (username==='admin' &&  password==='admin' ) {
      // create a fake token
      let token = "123456789-abcdef";

      localStorage.setItem('tech-token',token);
      // redirect to home page
      this.router.navigateByUrl('/home');

    }else{
      this.errMsg='wrong username or password';
    }
    
  }

}
