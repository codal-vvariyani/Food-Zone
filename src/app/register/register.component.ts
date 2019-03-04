import { Component, OnInit } from '@angular/core';
import { CustomerModel } from './customer-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  confirmPasswordVar: string;
  isPasswordMatch=true;
  customerModel = new CustomerModel('', '', '', '');

  constructor() { }

  ngOnInit() {
  }

  validateConfirmPassword(){
    if(this.customerModel.password!=this.confirmPassword)
      this.isPasswordMatch=false;
  }

}
