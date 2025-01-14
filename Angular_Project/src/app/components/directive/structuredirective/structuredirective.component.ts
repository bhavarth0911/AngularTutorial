import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structuredirective',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structuredirective.component.html',
  styleUrl: './structuredirective.component.css'
})
export class StructuredirectiveComponent {

  isDiv1Visible:boolean=true;

  isDiv2visible:boolean=false;
  isActive:boolean=true;
   
  selectedState:string='';

  cityArray:string[]=['pune','mumbai','nashik','nagpur'];
  num1:string='';
  num2:string='';

  studentList:any=[
    {id:1,name:'deven',city:'Pune',isActive:false},
    {id:2,name:'bhavarth',city:'mumbai',isActive:true},
    {id:3,name:'ram',city:'nashik',isActive:false},
    {id:4,name:'rushi',city:'nagput',isActive:true},
    

  ]

  showDiv1()
  {
    this.isDiv1Visible=true;
  }
  hideDiv1()
  {
    this.isDiv1Visible=false;
  }

  togglediv2()
  {
    this.isDiv2visible=!this.isDiv2visible;
  }
}
