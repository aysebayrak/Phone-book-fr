import { Customer } from 'src/app/models/customer';
import { ToastrService } from 'ngx-toastr';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  customerUpdateForm :FormGroup;
  customerId:number;
  customers: Customer[]=[];

  constructor(private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
   this.activatedRoute.params.subscribe((params)=>{
     if([params['customerId']]){
       this.customerId=parseInt(params['customerId']);
       this.getByCustomerId,params['customerId'];
     }
   });
   this.createCustomerForm();

  }

  createCustomerForm(){
    this.customerUpdateForm=this.formBuilder.group({
      id: [this.customerId,Validators.required],
      customerName:["",Validators.required],
      customerBirthDate :["",Validators.required],
      customerPhoneNumber: ["",Validators.required],
      customerDescription :["",Validators.required]
    })
  }

  getByCustomerId(customerId: number) {
    this.customerService.getByCustomerId(customerId).subscribe((response) => {
      this.customers = response.data;
    });
  }



  updateCustomer(){
    if(this.customerUpdateForm.valid){
      let customerModel=Object.assign({},this.customerUpdateForm.value);
      customerModel.customerId=Number(customerModel.id);
      this.customerService.updateCustomer(customerModel).subscribe((response)=>{
        this.toastrService.success(response.message,'Başarılı');
      });



    }
    else{
      this.toastrService.warning(
          'Enter Information...'

      );


  }


}



}
