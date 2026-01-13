import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './components/employee/employee';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Employee],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ibm-angular-demo');
}


// data exchange bw component and template -
// component to template =
// 1.  {{ string interpolation }}
// 2, 3, 4,
