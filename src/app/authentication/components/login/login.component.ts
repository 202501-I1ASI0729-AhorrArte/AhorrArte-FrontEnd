import { Component } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardTitle } from "@angular/material/card";
import { MatFormField } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInput } from "@angular/material/input";
import { Router, RouterLink } from "@angular/router";
import { MatButton } from "@angular/material/button";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ToolbarComponent } from "../../../../shared/components/toolbar/toolbar.component";
import { AuthService } from "../../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ToolbarComponent,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatFormField,
    MatIcon,
    MatCardActions,
    MatInput,
    RouterLink,
    MatButton,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null; // Para mostrar mensajes de error

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]], // Cambiado de email a username
      password: ['', Validators.required]
    });

  }

  get username() {
    return this.loginForm.controls['username'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }


  loginUser() {
    if (this.loginForm.invalid) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    const { username, password } = this.loginForm.value;

    this.authService.loginUser({ username, password }).subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response);
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('username', response.username);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error al iniciar sesión:', error);
        alert('Credenciales inválidas. Intenta de nuevo.');
      }
    });
  }


}
