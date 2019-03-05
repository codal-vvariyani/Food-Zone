import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) { }

  getCustomerList(){
    return this.http.get(environment.apiURL+'/Customer').toPromise();
   }

   getCustomer(id){
    return this.http.get(environment.apiURL+'/Customer/'+id).toPromise();
   }

   addCustomer(customerModel){
    return this.http.post(environment.apiURL+'/Customer', customerModel).toPromise();
   }

   validateUserName(username){
    return this.http.get(environment.apiURL+'/Customer?userName='+username).toPromise();
   }
}
