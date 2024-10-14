import { CommonModule } from '@angular/common';
import { Component,Input} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { select, Store } from '@ngrx/store';
import { AuthService } from '../../../State/Auth/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../State/User/user.service';
import { AppState } from '../../../reducer';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [MatButtonModule,MatFormFieldModule,CommonModule,ReactiveFormsModule,MatInputModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

@Input() changeTemplate: any;

  loginForm: FormGroup; 

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private authService:AuthService,private userService: UserService, private dialogRef: MatDialogRef<SigninComponent>) {
    
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
      console.log('login data', this.loginForm.value);
     

      this.dialogRef.close();

      if(localStorage.getItem("jwt")) this.userService.getUserProfile()

      
      
    }
  }


 


}





 

