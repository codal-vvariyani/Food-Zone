import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginModel } from './login-model';
import { AuthService } from '../shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../shared/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel = new LoginModel('', '');
  constructor(private authService: AuthService,
    private toastr: ToastrService,
    private tokenSevice: TokenService,
    private router : Router
    ) { }

  ngOnInit() {
  }

  onLogin() {
    this.authUser(this.loginModel.userName, this.loginModel.password).then((res)=>{
      console.log(res[0]);
      
      if (res[0]) {
        this.toastr.success("Login Succesfull", "Food Zone");
        this.authService.setAuthToken(res[0]);
        this.router.navigate(['home']);
      }
      else{
        this.toastr.warning("Invalid username or password", "Food Zone");
      }
    })
  }

  authUser(userName,password){
    return this.authService.authUser(userName,password);
  }
}
