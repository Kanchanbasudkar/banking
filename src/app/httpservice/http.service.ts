import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  isUserLoggedin: boolean;

  constructor(private httpClient: HttpClient) { }

  
   login(Objparam: any){
     return this.httpClient.post('https://reqres.in/api/login',Objparam);
   }
   getAllTrasctions(){
     return this.httpClient.get(' https://my-json-server.typicode.com/ketan-pande/view-all-transactions/transactions');
   }
   addNewTrasction(params: any){
    return this.httpClient.post(' https://reqres.in/api/users',params);
   }
   getCustomerDetails(params: any){
    return this.httpClient.get(' https://reqres.in/api/users?id=',params);
   }
   logout() {
    this.isUserLoggedin = false;
  }
  /* getcustomerdata(){
    return this.httpClient.get('../assets/customerdata.json');
  } */
   
}
