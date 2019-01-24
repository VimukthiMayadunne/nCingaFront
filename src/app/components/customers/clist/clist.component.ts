import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Customer } from '../../../models/customers.model';
import { CustomersService } from '../../../service/customers.service';

@Component({
  selector: 'app-clist',
  templateUrl: './clist.component.html',
  styleUrls: ['./clist.component.css']
})
export class ClistComponent implements OnInit {

  customer: Customer[];
  displayedColumns = ['cId', 'cFirstName', 'cLastName', 'cEmail' ,'contactno','actions'];

  constructor(private issueService: CustomersService, private router: Router) { }

  ngOnInit() {
    this.fetchC();
  }

  fetchC() {
    console.log("function called");
    this.issueService
      .getC()
      .subscribe((data: Customer[]) => {
        this.customer = data;
        console.log('Data requested ...');
        console.log(this.customer);
      });
  }

  editC(id) {
    this.router.navigate([`/cedit/${id}`]);
  }

  deleteC(id) {
    this.issueService.deleteC(id).subscribe(() => {
      this.fetchC();
    });
  }
 
}
