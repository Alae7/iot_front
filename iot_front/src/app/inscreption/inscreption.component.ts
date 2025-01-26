import { Component } from '@angular/core';
import {faHeartCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscreption',
  templateUrl: './inscreption.component.html',
  styleUrl: './inscreption.component.css'
})
export class InscreptionComponent {
  user = {
    sensorId: '',
    nom: '',
    prenom: '',
    birthdate: '',
    telephone: '',
    email: '',
    password: '',
    adresse: ''
  };

  // Set the maximum date as today (prevents future birthdates)
  maxDate = new Date().toISOString().split('T')[0];

  selectedImage: File | null = null;

  onSubmit(signupForm: any): void {
    if (signupForm.valid) {
      console.log('Form submitted successfully!', this.user);
      if (this.selectedImage) {
        console.log('Image selected:', this.selectedImage.name);
      }
      this.showSuccessPopup = true;
    }
  }

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
    }
  }

  // Calculate age based on birthdate
  getAge(): number {
    if (this.user.birthdate) {
      const birthDate = new Date(this.user.birthdate);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
    return 0;
  }



  successIcon = faHeartCircleCheck;

  showSuccessPopup = false; // Initialize as false

  constructor(private router: Router) {}

  closePopup(): void {
    this.showSuccessPopup = false;
    this.router.navigate(['/Login']);
  }

}
