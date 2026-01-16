import { Component } from '@angular/core';
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
  registeredUser?: User;

  constructor(private userService: UserService) { }

  register() {
    this.userService.register(this.user).subscribe(result => {
      this.registeredUser = result;
      console.log('Registered', result);
    });
  }
}
