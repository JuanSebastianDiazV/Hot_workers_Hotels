import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertService } from '../../services/alerts/alerts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register-general.page.html',
  styleUrls: ['./register-general.page.scss'],
})
export class RegisterGeneralPage implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private menuCtrl: MenuController,
    private alertService: AlertService
  ) {
    this.registerForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        username: ['', [Validators.required, Validators.minLength(4)]],
        password: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: this.checkPasswords }
    );
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notSame: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.alertService.presentSuccessAlert(
        '¡Usuario Creado Con Éxito!',
        'Tu usuario ha sido creado con éxito. Por favor, inicia sesión.',
        () => {
          this.registerForm.reset();
          this.router.navigate(['/entry-form']);
        }
      );
    } else {
      this.alertService.presentErrorAlert(
        'Error',
        'Por favor, complete todos los campos correctamente.'
      );
    }
  }
}
