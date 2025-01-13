import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule], //used forms module to used two way moduling
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  //for types of data type
  // string, number, boolean, date
  courseName:string="Angular 18";
  
  inputType = "checkbox";

  rollNo:number=123;

  isIndian:boolean=true;

  stateName:string="";

  myClassName="bg-primary";

  currentDate:Date=new Date();
  
  firstName=signal("sachin tendulkar");
  constructor()
  {
    
  }

  changeCourseName()
  {
    this.courseName="Reactn js";
    this.firstName.set("bhavarth");
  }
  showAlert(message:string)
  {
    alert(message);
  }
}
