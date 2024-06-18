import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertService } from '../../services/alerts/alerts.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage implements OnInit {
  passwordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private menuCtrl: MenuController,
    private alertService: AlertService
  ) {
    this.passwordForm = this.fb.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(4),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(4),
          ],
        ],
      },
      { validators: this.passwordsMatch }
    );
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  passwordsMatch(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      this.alertService.presentSuccessAlert(
        '¡Contraseña restablecida!',
        'Tu contraseña ha sido restablecida con éxito, por favor inica sesión',
        () => {
          this.router.navigate(['/entry-form']);
        }
      );
      console.log('Contraseña guardada:', this.passwordForm.value.password);
      // Navegar a una nueva ruta
    }
  }
}
