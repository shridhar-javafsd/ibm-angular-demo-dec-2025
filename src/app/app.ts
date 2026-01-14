import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './components/employee/employee';
import { Parent } from './components/parent/parent';

@Component({
  selector: 'app-root',
  imports: [Employee, Parent],
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
