import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
studenObj:any={
  name:'',
  lastName:'',
  userName:'',
  city:'',
  state:'',
  zip:'',
  isActive:false

}
dataForm:any;
submitForm()
{
this.dataForm=this.studenObj;
}
resetForm()
{
  this.studenObj={
    name:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    zip:'',
    isActive:false
  }
}
}
