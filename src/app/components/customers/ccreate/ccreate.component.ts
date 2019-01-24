import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { CustomersService } from '../../../service/customers.service';

@Component({
  selector: 'app-ccreate',
  templateUrl: './ccreate.component.html',
  styleUrls: ['./ccreate.component.css']
})
export class CcreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private customersService: CustomersService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      cId: ['', Validators.required],
      cFirstName: ['',Validators.required],
      cLastName: ['',Validators.required],
      cEmail: ['',Validators.required],
      contactno: ['',Validators.required],
    });
  }

  addC(cId, cFirstName,cLastName,cEmail ,contactno) {
    this.customersService.addC(cId, cFirstName,cLastName,cEmail ,contactno).subscribe(() => {
      this.router.navigate(['/clist']);
    });
  }

  ngOnInit() {
  }
}

