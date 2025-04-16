import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService, User } from '../../services/user.service';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class DashboardComponent implements OnInit {
  user: User = {
    id: 1, // ⚠️ Replace with actual logged-in user ID or retrieve dynamically later
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  };

  constructor(private userService: UserService) {}

  ngOnInit() {
    // 🔄 Load the user from backend
    this.userService.getUserById(this.user.id!).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
        console.error('Error fetching user data', err);
      }
    });
  }

  updateProfile() {
    this.userService.updateUser(this.user.id!, this.user).subscribe({
      next: (res) => {
        console.log('✅ User updated!', res);
        alert('Profile updated!');
      },
      error: (err) => {
        console.error('❌ Error updating user:', err);
        alert('Something went wrong. Please try again.');
      }
    });
  }
}
