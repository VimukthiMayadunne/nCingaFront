import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ItemsService } from '../../../service/items.service';

@Component({
  selector: 'app-icreate',
  templateUrl: './icreate.component.html',
  styleUrls: ['./icreate.component.css']
})
export class IcreateComponent implements OnInit {
  createForm: FormGroup;

  constructor(private itemsService: ItemsService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      iId: ['', Validators.required],
      iName: ['',Validators.required],
      sLHours: ['',Validators.required],
      sMHours: ['',Validators.required],
    });
  }

  addI(iId,iName,sLHours,sMHours ) {
    this.itemsService.addI(iId,iName,sLHours,sMHours).subscribe(() => {
      this.router.navigate(['/ilist']);
    });
  }

  ngOnInit() {
  }
}