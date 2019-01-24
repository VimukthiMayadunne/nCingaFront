import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { CustomersService } from '../../../service/customers.service';


@Component({
  selector: 'app-cedit',
  templateUrl: './cedit.component.html',
  styleUrls: ['./cedit.component.css']
})
export class CeditComponent implements OnInit {

  id: String;
  customer: any = {};
  updateForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private customersService: CustomersService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      cId: ['', Validators.required],
      cFirstName: ['',Validators.required],
      cLastName: ['',Validators.required],
      cEmail: ['',Validators.required],
      contactno: ['',Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.customersService.getCById(this.id).subscribe(res => {
        this.customer = res;
        this.updateForm.get('empId').setValue(this.customer.cId);
        this.updateForm.get('eFirstName').setValue(this.customer.cFirstName);
        this.updateForm.get('eLastName').setValue(this.customer.cLastName);
        this.updateForm.get('eEmail').setValue(this.customer.cEmail);
        this.updateForm.get('contactNo').setValue(this.customer.contactno);
      });
    });
  }

  updateC(cId, cFirstName,cLastName,cEmail ,contactno) {
    this.customersService.updateC(this.id,cId, cFirstName,cLastName,cEmail ,contactno).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 5000
      });
      this.router.navigate(['/clist']);
    });
  }

}
