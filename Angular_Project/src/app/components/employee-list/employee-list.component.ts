import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  template: '<h1 class="text-primary">Hello with internal html </h1>',
  styles: ['.primary{color:red}']
})
export class EmployeeListComponent {

}
