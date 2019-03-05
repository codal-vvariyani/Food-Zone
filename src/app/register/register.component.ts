import { Component, OnInit } from '@angular/core';
import { CustomerModel } from './customer-model';
import { CustomerService } from '../shared/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  confirmPasswordVar: string;
  isPasswordMatch = true;
  customerModel = new CustomerModel('', '', '', '');

  constructor(private customerService: CustomerService,
    private toastr: ToastrService, ) { }

  ngOnInit() {
  }

  validateConfirmPassword() {
    if (this.customerModel.password != this.confirmPasswordVar)
      this.isPasswordMatch = false;
  }

  onSubmit() {
    this.validateUsername(this.customerModel.userName).then((res)=>{
      console.log(res);
      
      if(res[0])
      this.toastr.warning("Username already exists", "Food Zone.");            
    else if (this.customerModel.password != this.confirmPasswordVar)
      this.toastr.warning("Passwords do not match", "Food Zone.");      
    else {
      console.log(this.customerModel);
      this.customerService.addCustomer(this.customerModel);
      this.toastr.success("Registered Successfully", "Food Zone.");
    }
    })
    
  }

  validateUsername(username){
    return this.customerService.validateUserName(username);
  }

}
