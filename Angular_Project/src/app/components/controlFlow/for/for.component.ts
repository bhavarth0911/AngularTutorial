import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  city:string[]=['pune','mumbai','nashik','nagpur']
  daynumber:string='';
  studentList:any=[
    {id:1,name:'deven',    gender:'male',  totalmarks:23, city:'Pune',isActive:false},
    {id:2,name:'bhavarth',gender:'female',totalmarks:44, city:'mumbai',isActive:true},
    {id:3,name:'ram',      gender:'male',  totalmarks:65, city:'nashik',isActive:false},
    {id:4,name:'rushi',    gender:'female',totalmarks:78, city:'nagput',isActive:true},
  ]
}
