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
    this.tokenService.setToken(res, this.authTokenKey);
  }

  removeAuthToken(){
    this.tokenService.removeToken(this.authTokenKey);
  }
}
