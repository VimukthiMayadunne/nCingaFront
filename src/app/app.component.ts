import { Component } from '@angular/core';
/*import * as io from 'socket.io-client';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Observer, observable } from 'rxjs';
import { Observable } from 'rxjs';
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
}
  /*observer: Observer<any>;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar) { }


  ngOnInit(){/*any{
      var socket = io.connect('http://localhost:4000');
      socket.on('alert',response => {
        this.alrtDisplay();
      return this.observer.next(response.data);
      });  
      return this.createObservable();
    }
  
    
    alrtDisplay(){
      this.snackBar.open("Alert Recived",'ok',{
        duration:50000
      });
    }
    createObservable() {
      console.log(observable);
      this.alrtDisplay();
      return;
  }
  */

