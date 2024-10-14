import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { AuthService } from '../../../State/Auth/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatButtonModule,MatFormFieldModule,MatInputModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  @Input() changeTemplate: any;

  loginForm: FormGroup; 

  constructor(private formBuilder: FormBuilder, private store: Store, private authService:AuthService,private dialogRef: MatDialogRef<SignupComponent>) {
    this.loginForm = this.formBuilder.group({
      firstName:["",[Validators.required]],
      lastName:["",[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      console.log('register data', this.loginForm.value);
      this.authService.register(this.loginForm.value);

      this.dialogRef.close();
    }
  }
}



