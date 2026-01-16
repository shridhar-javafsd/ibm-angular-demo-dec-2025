import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
})
export class Login {

  user: User = {};
  loggedInUser?: User | any = signal({});
  errorMessage?: string | any = signal('');

  constructor(private userService: UserService) { }

  login() {
    console.log('login');
    this.userService.login(this.user).subscribe(response => {
      if (this.user?.username === response?.username && this.user?.password === response?.username) {
        console.log(response);
        this.errorMessage.set('');
        this.user = {};
        this.loggedInUser.set(response);
        console.log(response);
        console.log(this.user);
        console.log(this.loggedInUser());
      } else {
        console.log(response);
        this.user = {};
        this.loggedInUser.set({});
        this.errorMessage.set('Invalid username');
        console.log(response);
        console.log(this.user);
        console.log(this.loggedInUser());
        console.error(this.errorMessage());
      }
    });
  }
}

