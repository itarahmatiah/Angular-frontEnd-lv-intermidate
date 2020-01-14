import { Injectable } from '@angular/core';
import { user } from './user.model';

import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser : user;
  private serverUrl = "api/oauth/token";
  private headers = new Headers(
    {'Content-Type':'application/x-www-form-urlencoded'}
  );

  constructor(private httpClient : Http) { }

  sudahLogin() : boolean {
    // this.currentUser =JSON.parse(localStorage.getItem('currentUser'));
    // return this.currentUser != null;

    this.currentUser =JSON.parse(localStorage.getItem('currentUser'));
    if(this.currentUser){
      console.log("Username "+this.currentUser.username);
      console.log("Token: "+this.currentUser.token);
    }
    return this.currentUser != null;
  }

  login(username : string, password:string) {
    // this.currentUser=new user(username, password);
    // localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

    let params : URLSearchParams = new URLSearchParams();
    params.set('client_id','internetbanking');
    params.set('grant_type','password');
    params.set('username',username);
    params.set('password',password);
    params.set('Authorization','Basic aW50ZXJuZXRiYW5raW5nOjEyMzQ1Ng==');

    this.httpClient.post(this.serverUrl,null,
      {headers : this.headers, search : params})
      .toPromise()
      .then(hasil => {
        let token = hasil.json().access_token;
        console.log("Access Token: "+token);
        if(token){
          this.currentUser = new user(username, token);
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        }
      })
      .catch(error => console.log('Error login: '+error));
  }

  getCurrentUser(){
    if(this.sudahLogin){
      return this.currentUser;
    }
    return null;
  }

  logoutUser(){
    localStorage.removeItem('currentUser');
  }
  
}
