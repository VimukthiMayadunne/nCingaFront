
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { IssueService } from '../../../service/issue.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {
  
  createForm: FormGroup;

  ngOnInit() {
  }

  constructor(private issueService: IssueService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      
      iId: ['', Validators.required],
      sDate: ['', Validators.required],
      fDate: ['', Validators.required],
      noDate: ['',Validators.required],
      avgEmp: ['',Validators.min(1)],
      mHours: ['',Validators.required],
    });
  }

  genPro(iId,sDate ,fDate ,noDate ,avgEmp ,mHours) {
    this.issueService.genPro(iId,sDate ,fDate ,noDate ,avgEmp ,mHours).subscribe(() => {
      this.router.navigate(['/plan']);
    });
  }


}
