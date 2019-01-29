import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';


  constructor(
    private router: Router,
    private snackBar: MatSnackBar) { }


    ngOnInit() {
    }
  
  
  
  }
  

