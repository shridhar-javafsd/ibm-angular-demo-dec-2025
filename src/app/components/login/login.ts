import { Component } from '@angular/core';
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
  loggedInUser?: User;
  errorMessage?: string;

  constructor(private userService: UserService) { }

  login() {
    this.userService.login(this.user).subscribe(result => {
      if (result) {
        this.loggedInUser = result;
        console.log('Login successful', result);
      } else {
        this.errorMessage = 'Invalid username';
        console.error(this.errorMessage);
      }
    });
  }
}

