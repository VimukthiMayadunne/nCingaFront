import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from "../service/user.service";
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ManGuard implements CanActivate {

  constructor(private userService : UserService,private router : Router , private snackBar: MatSnackBar){}

  canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot):boolean {
          if (!this.userService.isLoggedIn() || !this.userService.isManager()) {
            console.log(this.userService.isManager());
            console.log("1223123213123213213123123");
            this.snackBar.open('Required Manager Privilages', 'OK', {
              duration: 5000
            });        
            return false;
          }
          else
            return true;
      }
  }

