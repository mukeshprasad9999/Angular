import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GlobalConfig } from './GlobalConfig';
import { User } from '../models/user.model';
import { Login } from '../models/login.model';
import { UserClaim } from '../models/user-claim.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private client : HttpClient, private globalConfig : GlobalConfig) { 
  }
  
  //Registration
  signUp(user:User):Observable<HttpResponse<any>>{
    var reqHeader = new HttpHeaders({"Content-Type" : "application/json"});
    return this.client.post<Response>(this.globalConfig.apiAddress+'/api/User/UserRegistration',JSON.stringify(user),{headers : reqHeader, observe : "response"})
    .pipe(catchError(err => throwError(err)));
  }

  //Authentication 
  userAuthentication(login:Login):Observable<HttpResponse<any>> {
    var data = "UserName=" + login.Email + "&Password=" + login.Password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.client.post<Response>(this.globalConfig.apiAddress+'/token',data,{headers : reqHeader, observe : "response"})
    .pipe(catchError(err => throwError(err)));
  }

  getUserClaims():Observable<UserClaim> {
    var reqHeader = new HttpHeaders({ 'Authorization': 'Bearer '+localStorage.getItem('userToken') });
    return this.client.get<UserClaim>(this.globalConfig.apiAddress+'/api/User/GetUserClaims',{headers : reqHeader})
    .pipe(catchError(err => throwError(err)));
  }

  getUserDetails():Observable<User> {
    var reqHeader = new HttpHeaders({ 'Authorization': 'Bearer '+localStorage.getItem('userToken') });
    return this.client.get<User>(`${this.globalConfig.apiAddress}/api/User/GetUserDetail`,{headers : reqHeader})
    .pipe(catchError(err => throwError(err)));
  }

  updateUser(user:User):Observable<HttpResponse<any>>{
    var reqHeader = new HttpHeaders({"Content-Type" : "application/json",'Authorization': 'Bearer '+localStorage.getItem('userToken')});
    return this.client.put<Response>(this.globalConfig.apiAddress+'/api/User/UpdateUser',JSON.stringify(user),{headers : reqHeader, observe : "response"})
    .pipe(catchError(err => throwError(err)));
  }
}
