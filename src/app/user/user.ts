import { Component } from '@angular/core';
import { UserService } from '../services/user-service';


@Component({
  selector: 'app-user',
  imports: [],
  // standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

    username: string = '';

  constructor( private service: UserService ) {}

  clickToGetUserData = () => {
    this.service.getUserData().subscribe((response: any) => {
      console.log(response);
      this.username = response.data.username;

    });
  };





}



// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';


// @Component({
//   selector: 'app-user',
//   imports: [],
//   // standalone: true,
//   templateUrl: './user.html',
//   styleUrl: './user.css',
// })
// export class User {

//   apiUrl: string = 'https://jsonplaceholder.typicode.com/users/2';

//   username: string = '';

//   constructor(private http: HttpClient) { }

//   getUserData = () => {
//     this.http.get(this.apiUrl)
//       .subscribe((response: any) => {
//         console.log(response)
//         this.username = response.username;
//       });
//   };

// }
