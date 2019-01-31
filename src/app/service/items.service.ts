import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getMatIconNoHttpProviderError } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  uri = 'http://68.183.84.177:4000/item';

  constructor(private http: HttpClient) { }

  getI() {
    return this.http.get(`${this.uri}/get`);
  }



  getIById(id) {
    return this.http.get(`${this.uri}/get/${id}`);
  }

  addI(iId,iName,sLHours,sMHours) {
    const item = {
      iId:iId,
      iName: iName,
      sLHours: sLHours,
      sMHours: sMHours,
    };
    return this.http.post(`${this.uri}/add`, item);
  }
  updateI(id,iId,iName,sLHours,sMHours) {
    const item = {
      iId:iId,
      iName: iName,
      sLHours: sLHours,
      sMHours: sMHours,
    };
    return this.http.post(`${this.uri}/update/${id}`, item);
  }

  deleteI(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
  
}


