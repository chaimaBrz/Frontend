import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Ajoute ceci
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '..//services/auth.service'; // assure-toi que le chemin est correct


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule,              // ✅ Ajout obligatoire pour *ngIf, etc.
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    
  ]
})
export class LoginComponent implements OnInit {
  public show = false;
  public loginForm: FormGroup;
  public errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  showPassword() {
    this.show = !this.show;
  }

  login() {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: (res) => {
        this.authService.saveToken(JSON.stringify(res));
        this.router.navigate(['//e-commerce/product-list']);
      },
      error: () => {
        this.errorMessage = 'Email ou mot de passe incorrect';
      }
    });
  }
}