import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder,private userService: UserService) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const user = this.registrationForm.value;
      /*this.userService.registerUser(user).subscribe(
        (response) => {
          console.log('Inscription réussie :', response);
        },
        (error) => {
          console.error('Erreur lors  :', error);
        }
      );*/

      this.userService.registerUser(user).subscribe({
        next : response => {
          console.log('Inscription réussie :', response);
        },
        error : err => {
          console.error('Login error:', err);
        }
      })
      console.log('Données du formulaire :', user);
    }
  }


  ngOnInit() {
  }

}
