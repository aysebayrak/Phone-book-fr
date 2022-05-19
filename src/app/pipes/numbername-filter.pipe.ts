import { Customer } from 'src/app/models/customer';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbernameFilter'
})
export class NumbernameFilterPipe implements PipeTransform {

  transform(value: Customer[], numbernameFilterText: string): Customer[] {
    numbernameFilterText=numbernameFilterText?numbernameFilterText.toLocaleLowerCase():""
    return numbernameFilterText?value.filter((c:Customer)=>(c.customerName + " " + c.customerPhoneNumber + " " ).toLocaleLowerCase().indexOf(numbernameFilterText)!==-1):value;
  }

}
