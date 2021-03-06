import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { IssueService } from '../../../service/issue.service';
//import { statSync } from 'fs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private issueService: IssueService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      
      oId: ['', Validators.required],
      iId: ['', Validators.required],
      cId: ['', Validators.required],
      dueDate: ['',Validators.required],
      qntity: ['',Validators.min(1)],
      stat: ['',Validators.required]
    });
  }

  addIssue(oId,iId,cId, dueDate, qntity, stat) {
    this.issueService.addIssue(oId,iId,cId,  dueDate, qntity, stat).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
  }

}