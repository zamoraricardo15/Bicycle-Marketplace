import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _http: HttpClient
  ) { }
  loginUser(user) {
    console.log('in the service', user)
    return this._http.post('/login', user)
  }
  addUser(user) {
    console.log('in the service: ', user)
    return this._http.post('/register', user)
  }
}
