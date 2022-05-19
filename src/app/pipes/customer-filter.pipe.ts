import { Customer } from 'src/app/models/customer';
import { Pipe, PipeTransform } from '@angular/core';

//veriyi görsel olarak daha farklı şekilde göstermek için

@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {

  transform(value: Customer[], filterText: string): Customer[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
   return filterText?value.filter((p:Customer)=>p.customerName.toLocaleLowerCase()
   .indexOf(filterText)!==-1):value;
  }

}
