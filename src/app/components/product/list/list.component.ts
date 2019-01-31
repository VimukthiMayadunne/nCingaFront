import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { MatSnackBar } from '@angular/material';


import { Issue } from '../../../models/issue.model';
import { IssueService } from '../../../service/issue.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues: Issue[];
  displayedColumns = ['oId','iId','cId', 'dueDate', 'qntity', 'stat', 'actions'];

  constructor(private issueService: IssueService, private router: Router,private mat:MatSnackBar ) { }

  ngOnInit() {
    this.fetchIssues();
    this.CallMe();
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

  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }
  CallMe(){
    while(1){
      setTimeout(this.myFunction, 3000);
  }
}

  myFunction(){
    this.mat.open('Alert Trigered', 'OK', {
      duration: 500
    });
  }
 
}
