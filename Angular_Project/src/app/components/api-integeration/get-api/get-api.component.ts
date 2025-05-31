import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

 // http=inject(HttpClient); //dependency injection using inject
  constructor(private http:HttpClient){
    this.getAllUser();
  }
  userList:any[]=[];
  coustomerList:any[]=[];
   getAllUser() {
  debugger;
  // Used subscribe to catch the data after hitting the API 
  this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res: any) => {
    debugger;
    this.userList = res;
  }); 
}

getAllCoustomer(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.coustomerList=res;
    },error=>{
      debugger;
      console.error("bad request");
    });
  }
  
}
