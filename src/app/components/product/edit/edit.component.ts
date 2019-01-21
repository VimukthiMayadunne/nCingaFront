import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { IssueService } from '../../../service/issue.service';
import { Issue } from '../../../models/issue.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  issue: any = {};
  updateForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private issueService: IssueService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      itemname: ['', Validators.required],
      dueDate: ['',Validators.required],
      qntity: ['',Validators.min(1)],
      stat: ['',Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.issueService.getIssueById(this.id).subscribe(res => {
        this.issue = res;
        this.updateForm.get('itemname').setValue(this.issue.itemname);
        this.updateForm.get('dueDate').setValue(this.issue.dueDate);
        this.updateForm.get('qntity').setValue(this.issue.qntity);
        this.updateForm.get('stat').setValue(this.issue.stat);
      });
    });
  }

  updateIssue(itemname, dueDate, qntity, stat) {
    this.issueService.updateIssue(this.id,itemname, dueDate, qntity, stat).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 5000
      });
      this.router.navigate(['/list']);
    });
  }

}