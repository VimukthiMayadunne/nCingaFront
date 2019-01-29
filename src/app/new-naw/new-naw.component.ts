import { Component, OnInit } from '@angular/core';
import{UserService} from '../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-naw',
  templateUrl: './new-naw.component.html',
  styleUrls: ['./new-naw.component.css']
})
export class NewNawComponent implements OnInit {

  constructor(
    private UserService:UserService,private router:Router 
  ) { }

  ngOnInit() {
  }

  onLogoutclick(){
    this.UserService.deleteToken();
    this.router.navigate(['/login'])
  } 

}
