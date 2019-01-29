import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../service/user.service'
import { Router } from "@angular/router";
import { Autht } from '../models/autht.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,private router : Router) { }
  autht: Autht;
  model ={
    empId :'',
    password:''
  };

  //emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  ngOnInit() {
    /*this.userService.deleteToken();
    if(this.userService.isLoggedIn())
    console.log(this.userService.isLoggedIn())
    this.router.navigateByUrl('/begin');*/
  }

  onSubmit(form : NgForm){
    console.log(form);
    this.userService.deleteToken;
    this.userService.login(form.value).subscribe(
      (data: Autht ) => {
        this.autht = data;
        if(this.autht.success){
          this.userService.storeUserData(this.autht.token , this.autht.emp , this.autht.emp.eType);
          this.router.navigateByUrl('/begin');
        }
        else{
          console.log("Wrong PaasWord");
          this.router.navigateByUrl('/login');
        }
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}