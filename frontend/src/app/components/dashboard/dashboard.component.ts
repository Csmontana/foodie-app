import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { UserService, User } from '../../services/user.service'; // ✅ Import service + interface
import { HttpClientModule } from '@angular/common/http'; // ✅ Add this if not already included

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule] // ✅ Add HttpClientModule
})
export class DashboardComponent {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  };

  constructor(private userService: UserService) {}

  updateProfile() {
    this.userService.createUser(this.user).subscribe({
      next: (res) => {
        console.log('✅ User created!', res);
        alert('Profile saved!');
      },
      error: (err) => {
        console.error('❌ Error saving user:', err);
        alert('Something went wrong. Please try again.');
      }
    });
  }
}
