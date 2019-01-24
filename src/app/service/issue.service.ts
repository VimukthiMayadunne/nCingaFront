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

  getalerts() {
    return this.http.get(`http://localhost:4000/itemc/getal`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/get/${id}`);
  }

  addIssue(oId,iId,cId,date,qty,stat) {
    const issue = {
      oId:oId,
      iId: iId,
      cId:cId,
      dueDate: date,
      qntity: qty,
      stat: stat
    };
    return this.http.post(`${this.uri}/add`, issue);
  }
  updateIssue(id,oId,iId,cId,date, qty, stat) {
    const issue = {
      oId:oId,
      iId: iId,
      cId:cId,
      dueDate: date,
      qntity: qty,
      stat: stat
    };
    return this.http.post(`${this.uri}/update/${id}`, issue);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
  startPro(id,oId,iId,cId,aRate) {
    const issue = {
      oId:oId,
      iId: iId,
      cId:cId,
      aRate:aRate
    };
    return this.http.post(`http://localhost:4000/manual/add`, issue);
    }
  }
