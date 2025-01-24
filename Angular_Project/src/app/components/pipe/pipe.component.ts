import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,JsonPipe,AsyncPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstName:string="this is demo session"
  currentdate:Date=new Date();

  student:any={
    name:'chetan',
    city:'pune',
    empid:123
  }

  currentTime:Observable<Date>=new Observable<Date>;

  constructor()
  {
    this.currentTime=interval(1000).pipe(map(()=>new Date()))
      
  }
}
