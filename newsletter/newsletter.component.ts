import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [MatButton,MatButtonModule,MatIcon,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent {

  email: string = '';
  isPopupVisible = false; 

  newsletterEmails: string[] = [];  // Array to store the emails of those who signed up

  // Function to validate email format using regex
  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  openPopup() {
    const emailInput = (document.getElementById('emailInput') as HTMLInputElement).value;
    
    if (this.isValidEmail(this.email)) {
      this.isPopupVisible = true;   // Show popup only if email is valid
      this.newsletterEmails.push(emailInput);  // Store the email
      this.email = '';  // Clear the input field after submission
    } else {
      alert('Please enter a valid email address.');
    }
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  


}
