import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { EmployeeService } from '../../../service/employee.service';
import { COMPONENT_FACTORY_RESOLVER } from '@angular/core/src/render3/ng_module_ref';

@Component({
  selector: 'app-ecreate',
  templateUrl: './ecreate.component.html',
  styleUrls: ['./ecreate.component.css']
})
export class EcreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private empService: EmployeeService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      empId: ['', Validators.required],
      eFirstName: ['',Validators.required],
      eLastName: ['',Validators.required],
      eType: ['',Validators.required],
      password: ['',Validators.required],
      eEmail: ['',Validators.required],
      contactNo: ['',Validators.required],

    });
  }

  addE(empId, eFirstName,eLastName, eType,password,eEmail ,contactNo) {
    this.empService.addE(empId, eFirstName,eLastName, eType,password,eEmail ,contactNo).subscribe(() => {
      this.router.navigate(['/elist']);
    });
  }

  ngOnInit() {
  }
}
