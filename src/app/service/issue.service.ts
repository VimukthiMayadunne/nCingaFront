import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://68.183.84.177:4000/order';

  constructor(private http: HttpClient) { }

  genPro(iId,sDate ,fDate ,noDate ,avgEmp ,mHours){
    const data ={
      iId:iId,sDate:sDate ,fDate:fDate ,noDate:noDate ,avgEmp:avgEmp ,mHours:mHours
    }
    return this.http.post(`htt://localhost:4000/auto/add`, data);

  }

  getIssues() {
    return this.http.get(`${this.uri}/get`);
  }
  getProPlan(){
    return this.http.get('http://68.183.84.177:4000/auto/getone');
  }
  getfb(date){
    var newDate = new Date(date);
    var oldDate = new Date(date);
    //console.log(newDate);
    newDate.setDate(newDate.getDate() + 1);
    console.log(date);
    console.log(newDate);
    const bod = {
      nDate:newDate,
      oDate:oldDate
    }
    console.log(bod);
    return this.http.post(`http://localhost:4000/item/getfb`, bod);
  }

  getdueIssues() {
    return this.http.get(`${this.uri}/getdue`);
  }

  stopPro() {
    return this.http.get(``);
  }
  getalerts() {
    return this.http.get(`http://68.183.84.177:4000/itemc/getal`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/get/${id}`);
  }
  getstat(){
    return this.http.get(`http://68.183.84.177:4000/manual/getstat`);
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
    return this.http.post(`http://68.183.84.177:4000/manual/add`, issue);
    }
  }
