import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Item } from '../../../models/item.model';
import { ItemsService } from '../../../service/items.service';

@Component({
  selector: 'app-ilist',
  templateUrl: './ilist.component.html',
  styleUrls: ['./ilist.component.css']
})
export class IlistComponent implements OnInit {
  item: Item[];
  displayedColumns = ['iId', 'iName', 'sLHours', 'sMHours','actions'];

  constructor(private itemsService: ItemsService, private router: Router) { }

  ngOnInit() {
    this.fetchC();
  }

  fetchC() {
    console.log("function called");
    this.itemsService
      .getI()
      .subscribe((data: Item[]) => {
        this.item = data;
        console.log('Data requested ...');
        console.log(this.item);
      });
  }

  editI(id) {
    this.router.navigate([`/iedit/${id}`]);
  }

  deleteI(id) {
    this.itemsService.deleteI(id).subscribe(() => {
      this.fetchC();
    });
  }
 
}
