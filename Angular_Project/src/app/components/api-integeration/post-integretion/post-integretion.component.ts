import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-integretion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-integretion.component.html',
  styleUrl: './post-integretion.component.css'
})
export class PostIntegretionComponent implements OnInit {

  constructor(private http: HttpClient){
   
  }

  deptObj:any={
    "departmentId":0,
    "departmentName":"",
    "departmentLogo":""
  };
  ngOnInit(): void {
      this.getDepartment();
  }

  onsave()
  {
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deptObj).subscribe((res:any)=>
    {
      debugger;
      if(res.result){
        alert("department created sucessfully");
        this.getDepartment();
      }else {
        alert(res.message);
      }
    })
  }
depatList:any[]=[];
  getDepartment(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>
    {
      this.depatList=res.data;
    });
  }

}
