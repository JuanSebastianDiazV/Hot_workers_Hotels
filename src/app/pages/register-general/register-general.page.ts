import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertService } from '../../services/alerts/alerts.service';
import { UserRegistrationService } from '../../services/user-registration/user-registration.service'; // Importar el servicio
import * as moment from 'moment'; // Importar moment
import 'moment-timezone'; // Importar moment-timezone

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
    private alertService: AlertService,
    private userRegistrationService: UserRegistrationService // Inyectar el servicio
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
      const { email, username, password } = this.registerForm.value;
      const userData = { 
        email, 
        username, 
        password, 
        createdAt: moment().tz('America/New_York').toISOString(), // Ajustar la hora a la zona horaria deseada
        updatedAt: '0' // Valor inicial para updatedAt
      }; // Crear el objeto de datos de usuario

      this.userRegistrationService.registerUser(userData).subscribe({
        next: (response) => {
          if (response) {
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
              'Hubo un problema creando el usuario. Inténtelo nuevamente.'
            );
          }
        },
        error: (error) => {
          console.error('Error creando el usuario:', error);
          this.alertService.presentErrorAlert(
            'Error',
            'Hubo un problema con la solicitud.'
          );
        }
      });
    } else {
      this.alertService.presentErrorAlert(
        'Error',
        'Por favor, complete todos los campos correctamente.'
      );
    }
  }
}
