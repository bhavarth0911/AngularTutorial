import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  //if we have to send the rquest to api 
  //the field name should be same to request to postman
  studentForm: FormGroup = new FormGroup({
    firstname:new FormControl("",[Validators.required,Validators.minLength(5)]),
    lastname:new FormControl(),
    username:new FormControl("bydefault",[Validators.email]),//if we want to set default value like a palceholder
    city:new FormControl(),
    state:new FormControl(),
    zipCode:new FormControl(),
    isAcceptTerms:new FormControl(),
  });

  formValue:any;
  onSave(){
    this.formValue=this.studentForm.value;
  }
}
