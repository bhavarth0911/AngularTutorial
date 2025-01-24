import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attributedirective',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attributedirective.component.html',
  styleUrl: './attributedirective.component.css'
})
export class AttributedirectiveComponent {

  divbgColor:string='bg-primary';
  isDiv2Active:boolean=false;

  num1:string='';
  num2:string='';

  isActive:boolean=false;

  coustomeStyle:any={
    'color':'red',
    'width':'100px',
    'hight':'100px',
    'background-color':'blue' ,
    'border-radius':'50%'
  };

  studentList:any=[
    {id:1,name:'deven',    gender:'male',  totalmarks:23, city:'Pune',isActive:false},
    {id:2,name:'bhavarth;',gender:'female',totalmarks:44, city:'mumbai',isActive:true},
    {id:3,name:'ram',      gender:'male',  totalmarks:65, city:'nashik',isActive:false},
    {id:4,name:'rushi',    gender:'female',totalmarks:78, city:'nagput',isActive:true},
  ]

  addRed()
  {
    this.divbgColor='bg-danger';
  }
  addBlue()
  {
    this.divbgColor='bg-primary';
  }

  isToggle()
  {
    this.isDiv2Active=!this.isDiv2Active;
  }

  active()
  {
    this.isActive=!this.isActive;
  }
}
