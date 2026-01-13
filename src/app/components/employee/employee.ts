import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  data = { id: 101, name: 'Sonu', salary: 10.50 }

}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-employee',
//   template: `<p>this</p>`
// })
// export class Employee {

//   data = { id: 101, name: 'Sonu', salary: 10.50 }

// }


