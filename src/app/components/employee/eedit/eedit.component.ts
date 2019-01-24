import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { EmployeeService } from '../../../service/employee.service';

@Component({
  selector: 'app-eedit',
  templateUrl: './eedit.component.html',
  styleUrls: ['./eedit.component.css']
})
export class EeditComponent implements OnInit {

  id: String;
  employee: any = {};
  updateForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      empId: ['', Validators.required],
      eFirstName: ['',Validators.required],
      eLastName: ['',Validators.required],
      eType: ['',Validators.required],
      password: ['',Validators.required],
      eEmail: ['',Validators.required],
      contactNo: ['',Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.employeeService.getEById(this.id).subscribe(res => {
        this.employee = res;
        this.updateForm.get('empId').setValue(this.employee.empId);
        this.updateForm.get('eFirstName').setValue(this.employee.eFirstName);
        this.updateForm.get('eLastName').setValue(this.employee.eLastName);
        this.updateForm.get('eType').setValue(this.employee.eType);
        this.updateForm.get('eEmail').setValue(this.employee.eEmail);
        this.updateForm.get('contactNo').setValue(this.employee.contactNo);
      });
    });
  }

  updateE(empId, eFirstName,eLastName, eType,password,eEmail ,contactNo) {
    this.employeeService.updateE(this.id,empId, eFirstName,eLastName, eType,password,eEmail ,contactNo).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 5000
      });
      this.router.navigate(['/elist']);
    });
  }

}

