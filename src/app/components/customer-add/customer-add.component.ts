import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customerAddForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private customerService:CustomerService
  ) { }

  ngOnInit(): void {
    this.createCustomerAddForm();
  }


  createCustomerAddForm(){
    this.customerAddForm=this.formBuilder.group({
      customerName:["",Validators.required],
      customerBirthDate :["",Validators.required],
      customerPhoneNumber:["",Validators.required],
      customerDescription :["",Validators.required]
    })

  }
  add(){
    if(this.customerAddForm.valid){
      let customerModel = Object.assign({},this.customerAddForm.value)
      this.customerService.addCustomer(customerModel).subscribe(response =>{
        this.toastrService.success(response.message ," Customer Added ")
      }
      )
    }
    else{
      this.toastrService.error("Fill in the Form Information Completely...","Attention")
    }
  }


}
