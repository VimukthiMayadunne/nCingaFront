import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Issue } from '../../../models/issue.model';
import { IssueService } from '../../../service/issue.service';

@Component({
  selector: 'app-begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.css']
})
export class BeginComponent implements OnInit {

  issues: Issue[];
  displayedColumns = ['oId','iId', 'dueDate', 'qntity', 'stat', 'actions'];

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    console.log("function called");
    this.issueService
      .getIssues()
      .subscribe((data: Issue[]) => {
        this.issues = data;
        console.log('Data requested ...');
        console.log(this.issues);
      });
  }

  manualProduct(id) {
    this.router.navigate([`/manual/${id}`]);
  }

  
  autoProduct(id) {
    this.router.navigate([`/manual/${id}`]);
  }
 
}
