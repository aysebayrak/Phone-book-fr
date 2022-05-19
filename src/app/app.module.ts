import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { NaviComponent } from './components/navi/navi.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { CustomerFilterPipe } from './pipes/customer-filter.pipe';
import { NumberFilterPipe } from './pipes/number-filter.pipe';
import { NumbernameFilterPipe } from './pipes/numbername-filter.pipe';








@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerAddComponent,
    NaviComponent,
    CustomerUpdateComponent,
    CustomerFilterPipe,
    NumberFilterPipe,
    NumbernameFilterPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,


    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
