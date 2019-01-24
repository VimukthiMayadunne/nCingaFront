import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Alerts } from '../../models/alerts.model';
import { IssueService } from '../../service/issue.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  alerts: Alerts[];
  displayedColumns = ['oid','iId','cId', 'variance', 'timeStamp'];

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    console.log("function called");
    this.issueService
      .getalerts()
      .subscribe((data: Alerts[]) => {
        this.alerts = data;
        console.log('Data requested ...');
        console.log(this.alerts);
      });
  }

}
