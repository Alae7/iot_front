import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {faHeartCircleCheck, faHeartPulse, faUserLock} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = faUserLock


  // login


  loginForm: FormGroup;
  loginFailed: boolean = false;

  constructor(private fb: FormBuilder) {
    // Initialize the form with validators for email and password
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Getter to easily access form controls
  get formControls() {
    return this.loginForm.controls;
  }

  // Function to handle login form submission
  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      // Replace the following condition with your actual login validation logic
      if (email !== 'correct@example.com' || password !== 'correctPassword') {
        this.loginFailed = true; // Set error to true if login is invalid
      } else {
        this.loginFailed = false; // Reset error if login is valid
        console.log('Login Successful:', email, password);
      }
    } else {
      console.log('Form is invalid!');
    }
  }



  // forgot password


  email: string = '';
  verificationCode: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  emailModalOpen: boolean = false;
  codeModalOpen: boolean = false;
  newPasswordModalOpen: boolean = false;


// Open the email modal
  openEmailModal(): void {
    this.emailModalOpen = true;
  }

  // Close the modal by name
  closeModal(modal: string): void {
    if (modal === 'emailModal') {
      this.emailModalOpen = false;
    } else if (modal === 'codeModal') {
      this.codeModalOpen = false;
    } else if (modal === 'newPasswordModal') {
      this.newPasswordModalOpen = false;
    }
  }

  // Send verification code to the email
  sendCode(): void {
    console.log(`Sending code to email: ${this.email}`);
    // Simulate sending code and then open the next modal
    this.closeModal('emailModal');
    this.codeModalOpen = true;
  }

  // Verify the code entered by the user
  verifyCode(): void {
    console.log(`Verifying code: ${this.verificationCode}`);
    // Simulate code verification and open the next modal
    this.closeModal('codeModal');
    this.newPasswordModalOpen = true;
  }

  // Create a new password
  createNewPassword(): void {
    if (this.newPassword === this.confirmPassword && this.newPassword.length >= 6) {
      console.log(`Creating new password: ${this.newPassword}`);
      this.closeModal('newPasswordModal');
      this.showSuccessPopup = true; // Show success popup
    } else {
      console.log('Password mismatch or not valid.');
    }
  }

  protected readonly heart = faHeartPulse;
  // alert pop up

  successIcon = faHeartCircleCheck;

  showSuccessPopup = false; // Initialize as false


  closePopup(): void {
    this.showSuccessPopup = false;
  }





}
