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

  getdueIssues() {
    return this.http.get(`${this.uri}/getdue`);
  }

  stopPro() {
    return this.http.get(``);
  }
  getalerts() {
    return this.http.get(`http://localhost:4000/itemc/getal`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/get/${id}`);
  }
  getstat(){
    return this.http.get(`http://localhost:4000/manual/getstat`);
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
  startPro(oId,iId,cId,dId,aRate) {
    const issue = {
      oId:oId,
      iId: iId,
      cId:cId,
      dId:dId,
      aRate:aRate
    };
    return this.http.post(`http://localhost:4000/manual/add`, issue);
    }
  }
