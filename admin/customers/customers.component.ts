import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from 'app/State/User/user.service';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {

  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe(
      (users: any[]) => {
        const sortedUsers = users.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        this.users = sortedUsers;
        // this.users = users;
      },
      (error: any) => {
        console.error('Error fetching users', error);
      }
    );
  }

  deleteUser(userId: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe(
        (response) => {
          console.log('User deleted successfully:', response);
          // After deleting, refresh the user list
          this.loadUsers();
        },
        (error) => {
          console.error('Error deleting user:', error);
          alert('An error occurred while trying to delete the user. Please try again.'); // Notify the user about the error
        }
      );
    }
  }
}
