import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {

  isActive:boolean=false;
  isWarnDiv2:boolean=true;
  num1:string='';
  num2:string='';
  selectedStatus:string='';
  hide()
  {
    this.isActive=false;
  }

  show()
  {
    this.isActive=true;
  }

  toggleDiv2()
  {
    this.isWarnDiv2=!this.isWarnDiv2;
  }
}
