import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage {
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    }, { validators: this.passwordsMatch });
  }

  passwordsMatch(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      // Lógica para manejar la contraseña guardada
      console.log('Contraseña guardada:', this.passwordForm.value.password);
      // Navegar a una nueva ruta
      this.router.navigate(['/new-route']);
    }
  }
}
