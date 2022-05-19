import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
  {path:"customers",component:CustomerComponent},
  {path:"customers/add",component:CustomerAddComponent},
  {path:"customers/update/:customerId",component:CustomerUpdateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
