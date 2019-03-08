import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private tokenService: TokenService) { }
    
    authTokenKey = "AuthObject"
  
  authUser(userName, password) {
    return this.http.get(environment.apiURL + '/Customer?userName=' + userName + '&password=' + password).toPromise();
  }

  setAuthToken(res){
    this.tokenService.useLocalStorage();
    return this.tokenService.setToken(res, this.authTokenKey);
  }

  getAuthToken(){
    this.tokenService.useLocalStorage();
    return this.tokenService.getToken(this.authTokenKey);
  }

  removeAuthToken(){
    return this.tokenService.removeToken(this.authTokenKey);
  }
}
