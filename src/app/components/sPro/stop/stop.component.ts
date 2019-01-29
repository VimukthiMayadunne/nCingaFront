import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../../service/issue.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css']
})
export class StopComponent implements OnInit {

  constructor(private issueService: IssueService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }
  endPro() {
    this.issueService.stopPro().subscribe(() => {
      this.snackBar.open('Production Terminated', 'OK', {
        duration: 5000
      });
      this.router.navigate(['/list']);
    });
  }

}
