import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../models/customer';

@Pipe({
  name: 'numberFilter'
})
export class NumberFilterPipe implements PipeTransform {

  transform(value: Customer[], filterNumberText: string): Customer[] {
    filterNumberText = filterNumberText?filterNumberText.toLocaleLowerCase():""
   return filterNumberText?value.filter((p:Customer)=>p.customerPhoneNumber.toLocaleLowerCase()
   .indexOf(filterNumberText)!==-1):value;
  }

}
