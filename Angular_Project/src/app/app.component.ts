import { Component } from '@angular/core';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuredirectiveComponent } from './components/directive/structuredirective/structuredirective.component';
// import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StructuredirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Project';
}
