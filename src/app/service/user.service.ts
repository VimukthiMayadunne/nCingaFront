import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import { environment } from '../../environments/environment';
import { User } from '../models/user.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    empId:'',
    password: ''
  };

  authToken: any;
  user: any;


  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //HttpMethods
/*
  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
  }
*/
  login(authCredentials) {
    return this.http.post('http://localhost:4000/login/authenticate', authCredentials,this.noAuthHeader);
  }
/*
  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
  }
*/

  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    console.log(localStorage.getItem('user'));
    return localStorage.getItem('token');

  }

  isManager(){
    let man=localStorage.getItem('eType');
    if( man == 'Supervisor'){
      return true
    }
    else{
      return false
    }

  }

  storeUserData(token, user ,eType) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('eType', eType);

    this.authToken = token;
    this.user = user;
  }


  deleteToken() {
    console.log("Called Delete Tocken");
    console.log(this.getToken());
    console.log("Deleting tocken");
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    console.log("Result is",this.getToken());

  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
