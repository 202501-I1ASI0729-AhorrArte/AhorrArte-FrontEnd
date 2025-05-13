import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth.service";
import {Router, RouterLink} from "@angular/router";

import {User} from "../../interfaces/auth";
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {ToolbarComponent} from "../../../../shared/components/toolbar/toolbar.component";
import {MatOption, MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    ReactiveFormsModule,
    MatFormField,
    MatIcon,
    MatCardActions,
    RouterLink,
    MatInput,
    MatButton,
    MatToolbar,
    ToolbarComponent,
    MatSelect,
    MatOption
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  registerForm;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      password: ['', Validators.required],
      roles: [['ROLE_USER'], Validators.required] // Valor por defecto y validación
    });



  }

  get username() {
    return this.registerForm.controls['username'];
  }



  get password() {
    return this.registerForm.controls['password'];
  }

  submitDetails() {
    const postData = { ...this.registerForm.value };

    // Asegurar que roles sea un array válido
    postData.roles = Array.isArray(postData.roles) ? postData.roles : [postData.roles || 'ROLE_USER'];

    this.authService.registerUser(postData as User).subscribe(
      response => {
        console.log('Usuario registrado:', response);
        alert('Usuario registrado correctamente');
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Error al registrar usuario:', error);
        alert('Hubo un error al registrar el usuario. Intente nuevamente.');
      }
    );
  }







}
