import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ItemsService } from '../../../service/items.service';

@Component({
  selector: 'app-iedit',
  templateUrl: './iedit.component.html',
  styleUrls: ['./iedit.component.css']
})
export class IeditComponent implements OnInit {


  id: String;
  item: any = {};
  updateForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private itemsService: ItemsService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      iId: ['', Validators.required],
      iName: ['',Validators.required],
      sLHours: ['',Validators.required],
      sMHours: ['',Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.itemsService.getIById(this.id).subscribe(res => {
        this.item = res;
        this.updateForm.get('iId').setValue(this.item.cId);
        this.updateForm.get('iName').setValue(this.item.iName);
        this.updateForm.get('sLHours').setValue(this.item.sLHours);
        this.updateForm.get('sMHours').setValue(this.item.sMHours);
      });
    });
  }

  updateI(iId,iName,sLHours,sMHours) {
    this.itemsService.updateI(this.id,iId,iName,sLHours,sMHours).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 5000
      });
      this.router.navigate(['/ilist']);
    });
  }

}
