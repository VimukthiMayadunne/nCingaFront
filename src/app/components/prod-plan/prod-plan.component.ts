import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stat } from '../../models/stat.model';
import { IssueService } from '../../service/issue.service';

@Component({
  selector: 'app-prod-plan',
  templateUrl: './prod-plan.component.html',
  styleUrls: ['./prod-plan.component.css']
})
export class ProdPlanComponent implements OnInit {
  data: Stat;

  constructor(private itemsService: IssueService, private router: Router) { }

  ngOnInit() {
    this.fetchC();
  }

  fetchC() {
    console.log("function called");
    this.itemsService.getProPlan()
      .subscribe((data: Stat) => {
        this.data = data;
        console.log('Data requested ...');
        console.log(this.data);
      });
  }
}
