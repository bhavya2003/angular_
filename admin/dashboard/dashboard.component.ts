import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/State/Product/product.service';
import { UserService } from 'app/State/User/user.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {  
  users: any[] = [];
  products: any[] = [];


  constructor(private userService: UserService,private productService: ProductService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe(
      (users: any[]) => {
        const sortedUsers = users.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        this.users = sortedUsers;
        
        this.users = users.slice(0, 5);
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
          this.loadUsers(); // Refresh the user list after deleting
        },
        (error) => {
          console.error('Error deleting user:', error);
          alert('An error occurred while trying to delete the user. Please try again.');
        }
      );
    }
  }
}


  