import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  apiUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUserData = (userid: number): any => {
    console.log(userid);
    return this.http.get(`${this.apiUrl}/${userid}`);
  };

  // getUserById 
  // getAllUsers 
  // addUser 
  // updateUser 
  // deleteUser 


}

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserService {

//   apiUrl: string = 'https://jsonplaceholder.typicode.com/users/2';

//   constructor(private http: HttpClient) { }

//   getUserData = (): any => {
//     console.log('getUserData');
//     return this.http.get(this.apiUrl);
//   };

//   // getUserById
//   // getAllUsers
//   // addUser
//   // updateUser
//   // deleteUser


// }
