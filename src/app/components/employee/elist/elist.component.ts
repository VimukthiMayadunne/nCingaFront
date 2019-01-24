import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../../service/employee.service';

@Component({
  selector: 'app-elist',
  templateUrl: './elist.component.html',
  styleUrls: ['./elist.component.css']
})
export class ElistComponent implements OnInit {

  employee: Employee[];
  displayedColumns = ['empId', 'eFirstName', 'eLastName','eType', 'eEmail' ,'contactNo','actions'];

  constructor(private issueService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.fetchE();
  }

  fetchE() {
    console.log("function called");
    this.issueService
      .getE()
      .subscribe((data: Employee[]) => {
        this.employee = data;
        console.log('Data requested ...');
        console.log(this.employee);
      });
  }

  editE(id) {
    this.router.navigate([`/eedit/${id}`]);
  }

  deleteE(id) {
    this.issueService.delete(id).subscribe(() => {
      this.fetchE();
    });
  }
 
}

