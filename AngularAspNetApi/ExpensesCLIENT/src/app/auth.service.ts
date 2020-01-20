import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceUtils } from './common/serviceUtils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private serviceUtils: ServiceUtils) { }

  register(user) {
    return this.http.post(this.serviceUtils.AuthServiceURL + "register", user);
  }              

  login(user) {
    return this.http.post(this.serviceUtils.AuthServiceURL + "login", user);
  }              
}
