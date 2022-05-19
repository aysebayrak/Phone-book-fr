import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Customer } from 'src/app/models/customer';
import { ResponseModel } from 'src/app/models/responseModel';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl ="https://localhost:44363/api/"

  constructor(private httpClient: HttpClient) { }


  getCustomer(): Observable<ListResponseModel<Customer>>{
    let newPath =this.apiUrl + "customers/getall"
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }


  addCustomer(customer:Customer):Observable<ResponseModel>{
    let newPath = this.apiUrl + "customers/add";
    return this.httpClient.post<ResponseModel>(newPath,customer)
  }


  updateCustomer(customer:Customer):Observable<ResponseModel>{
    let newPath = this.apiUrl + "customers/update";
    return this.httpClient.post<ResponseModel>(newPath,customer)
  }


  deleteCustomer(customer:Customer):Observable<ResponseModel>{
    let newPath = this.apiUrl+ "customers/delete";
    return this.httpClient.post<ResponseModel>(newPath,customer)
  }
  getByCustomerId(customerId:number):Observable<ListResponseModel<Customer>>{
    let newPath = this.apiUrl + "customers/getbycustomerid?id="+customerId;
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
}




