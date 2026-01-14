import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Department } from '../department/department';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [CommonModule, FormsModule, Department],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})

export class Employee {

  employees = [
    { id: 101, name: 'Sonu', salary: 10.50 },
    { id: 102, name: 'Monu', salary: 12.25 },
    { id: 103, name: 'Tonu', salary: 11.75 },
    { id: 104, name: 'Ponu', salary: 11.25 }];

  shouldShowOrHide: boolean = false;

  showOrHide = () => {
    this.shouldShowOrHide = !this.shouldShowOrHide;
  };

  empData = { id: 101, name: 'Sonu', salary: 10.50 }



  isDisabled = true;

  username = ''; // this 

  onClickFunction = () => { alert('Button clicked!'); };

}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-employee',
//   template: `<p>this</p>`
// })
// export class Employee {
// }


