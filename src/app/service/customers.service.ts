import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  uri = 'http://localhost:4000/customer';

  constructor(private http: HttpClient) { }

  getC() {
    return this.http.get(`${this.uri}/get`);
  }

  getCById(id) {
    return this.http.get(`${this.uri}/get/${id}`);
  }

  addC(cId,cFirstName,cLastName,cEmail,cContactNo) {
    const customer = {
      cId:cId,
      cFirstName: cFirstName,
      cLastName: cLastName,
      cEmail: cEmail,
      cContactNo: cContactNo
    };
    return this.http.post(`${this.uri}/add`, customer);
  }
  updateC(id,cId,cFirstName,cLastName,cEmail,cContactNo) {
    const customer = {
      cId:cId,
      cFirstName: cFirstName,
      cLastName: cLastName,
      cEmail: cEmail,
      cContactNo: cContactNo
    };
    return this.http.put(`${this.uri}/update/${id}`, customer);
  }

  deleteC(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}

