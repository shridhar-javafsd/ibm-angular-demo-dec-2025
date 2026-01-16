import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
})
export class Register {

  user: User = {};
  registeredUser?: User | any = signal({});
  errorMessage: string | any = signal('');

  constructor(private userService: UserService) { }

  register() {
    this.userService.register(this.user).subscribe(response => {
      if (response) {
        this.registeredUser.set(response);
        console.log('Registration successful', response);
      } else {
        this.errorMessage.set('Something is not right!');
        console.error(this.errorMessage);
      }
    });
  }
}
