import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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

// app structure
// components
// directives
// routing
// httpClient
// decorators 

// ng generate service services/user/user-service
// ng generate service services/ride/ride-service

// ng generate component components/user
// ng generate component components/ride

// ng generate interface models/user
// ng generate interface models/ride

// team-1
// backend (NodeJS express project)
// frontend-1 (HTML CSS JS Project)
// frontend-ng (Angular project)
// other-stuff (documentation, txt files, images etc)
