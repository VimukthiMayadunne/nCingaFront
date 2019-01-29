import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  authToken: any;
  user: any
  uri = 'http://localhost:4000/emp';

  constructor(private http: HttpClient) { }
  
  getE() {
    return this.http.get(`${this.uri}/get`);
  }

  getEById(id) {
    return this.http.get(`${this.uri}/get/${id}`);
  }

  addE(eid, fname, lname,type,pass, email ,cno) {
    const employee = {
      empId: eid,
      eFirstName: fname,
      eLastName: lname,
      eType: type,
      password:pass,
      eEmail: email,
      contactNo:cno
    };
    return this.http.post(`${this.uri}/add`, employee);
  }
  updateE(id,eid ,fname, lname,type,pass ,email ,cno) {
    const employee = {
      empId: eid,
      eFirstName: fname,
      eLastName: lname,
      eType: type,
      password:pass,
      eEmail: email,
      contactNo:cno
    };
    return this.http.put(`${this.uri}/update/${id}`, employee);
  }

  delete(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
