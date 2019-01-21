import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:4000/order';

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.uri}/get`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/get/${id}`);
  }

  addIssue(item, date, qty, stat) {
    const issue = {
      itemname: item,
      dueDate: date,
      qntity: qty,
      stat: stat
    };
    return this.http.post(`${this.uri}/add`, issue);
  }

  addOredr(oid,qty) {
    const order = {
      odi: oid,
      qntity: qty
    };
    return this.http.post(`${this.uri}/add`, order);
  }

  updateIssue(id,item, date, qty, stat) {
    const issue = {
      itemname: item,
      dueDate: date,
      qntity: qty,
      stat: stat
    };
    return this.http.put(`${this.uri}/update/${id}`, issue);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
