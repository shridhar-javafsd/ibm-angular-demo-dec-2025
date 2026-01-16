import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { map, Observable } from 'rxjs';
import { UserProfile } from '../models/user-profile';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  // Fake API
  apiUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

login(loginRequest: User): Observable<User> {
  console.log(loginRequest);
  return this.http
    .get<User[]>(`${this.apiUrl}?username=${loginRequest.username}`)
    .pipe(
      map(users => users[0])   
    );
}

  register(registerRequest: User): Observable<User> {
    console.log(registerRequest)
    return this.http.post<User>(this.apiUrl, registerRequest);
  }

  viewProfile(user: User): Observable<UserProfile> {
    console.log(user);
    return this.http.get<UserProfile>(`${this.apiUrl}/${user.id}`);
  }

    getUserById = (userId: number): any => {
    console.log(userId);
    return this.http.get(`${this.apiUrl}/${userId}`);
  };

}


  // getUserById 
  // getAllUsers 
  // addUser 
  // updateUser 
  // deleteUser 



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
