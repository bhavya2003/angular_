import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth.component';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { authReducer } from '../../State/Auth/auth.reducer';



@NgModule({
  declarations: [SigninComponent,SignupComponent,AuthComponent],
  imports: [
    CommonModule
  ],
  providers: [
    // Provide feature-level store and effects for authentication
    provideStore({ auth: authReducer }),   // StoreModule.forFeature equivalent
  ]
})
export class AuthModule { }
