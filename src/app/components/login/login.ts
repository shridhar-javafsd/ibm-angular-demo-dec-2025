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

  // use signal here 
  user: User = {};
  // loggedInUser?: User;
  loggedInUser?: User | any = signal({});
  errorMessage?: string | any = signal('');

  constructor(private userService: UserService) { }

  login() {
    this.userService.login(this.user).subscribe(result => {
      if (result) {
        this.loggedInUser.set(result);
        console.log('Login successful', result);
      } else {
        this.errorMessage.set('Invalid username');
        console.error(this.errorMessage);
      }
    });
  }
}

