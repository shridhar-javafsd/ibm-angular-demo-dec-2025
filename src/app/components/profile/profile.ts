import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserProfile } from '../../models/user-profile';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
})
export class Profile {

  userId!: number;
  profile?: UserProfile;

  constructor(private userService: UserService) { }

  viewProfile() {
    this.userService.viewProfile({ id: this.userId }).subscribe(result => {
      this.profile = result as UserProfile;
    });
  }
}
