import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Issue } from '../../../models/issue.model';
import { IssueService } from '../../../service/issue.service';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {

  id: String;
  issue: any = {};
  updateForm: FormGroup;


  // tslint:disable-next-line:max-line-length
  constructor(private issueService: IssueService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      oId: ['', Validators.required],
      iId: ['', Validators.required],
      cId: ['', Validators.required],
      dId: ['',Validators.required],
      aRate: ['',Validators.required]

    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.issueService.getIssueById(this.id).subscribe(res => {
        this.issue = res;
        this.updateForm.get('oId').setValue(this.issue.oId);
        this.updateForm.get('iId').setValue(this.issue.iId);
        this.updateForm.get('cId').setValue(this.issue.cId);
      });
    });
  }


  startPro(oId, iId, cId ,dId, aRate ) {
    this.issueService.startPro(oId,iId,cId,dId,aRate).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 5000
      });
      console.log(oId, iId, cId ,dId, aRate);
      this.router.navigate(['/list']);
    });
  }

  

}