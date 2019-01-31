import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { Stat } from '../../models/stat.model';
import { IssueService } from '../../service/issue.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  data: Stat=null;
  rsponse: Stat=null;
  createForm: FormGroup;
  dty:Date;
 
  constructor(private router: Router,private fb: FormBuilder,private itemsService: IssueService) { 
    this.createForm = this.fb.group({
      
      date: ['', Validators.required],
    });
  
  }

  ngOnInit() {
    this.fetchdt();
  }
 
  fetchdt(){
    this.data=this.rsponse;
  }
  fetchC(date) {
    console.log("function called");
    this.itemsService.getfb(date)
      .subscribe((res: Stat) => {
        this.data = res;
        console.log('Data requested ...');
        console.log(this.data);
      });

    }

}
