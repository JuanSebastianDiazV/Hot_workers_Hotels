import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertService } from '../../services/alerts/alerts.service';
import { EmployeeService } from '../../services/employee-service/employee.service'; // Importar el servicio
import { FormService } from '../../services/form-service/formservice.service'; // Importar el servicio de formularios
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
  isSubmitting: boolean = false; // Variable para manejar el estado del envío

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private menuCtrl: MenuController,
    private alertService: AlertService,
    private employeeService: EmployeeService, // Inyectar el servicio
    private formService: FormService, // Inyectar el servicio de formularios
    private userRegistrationService: UserRegistrationService // Inyectar el servicio
  ) {
    this.registerForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        username: ['', [Validators.required, Validators.minLength(4)]],
        password: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.checkPasswords.bind(this) } // Asocia correctamente la función
    );
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.formService.setForm('registerForm', this.registerForm); // Registra el formulario
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notSame: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isSubmitting = true; // Establecer la bandera de envío
      const { email, username, password } = this.registerForm.value;
      const userData = {
        email,
        username,
        password,
        createdAt: moment().tz('America/New_York').toISOString(), // Ajustar la hora a la zona horaria deseada
        updatedAt: '0', // Valor inicial para updatedAt
      };

      // Llamadas a servicios en paralelo
      this.employeeService.saveEmployeeData(userData).subscribe({
        next: () => {
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
              this.isSubmitting = false; // Restablecer la bandera de envío
            },
            error: (error) => {
              console.error('Error creando el usuario:', error);
              this.alertService.presentErrorAlert(
                'Error',
                'Hubo un problema con la solicitud.'
              );
              this.isSubmitting = false; // Restablecer la bandera de envío
            },
          });
        },
        error: (error) => {
          console.error('Error guardando los datos del empleado:', error);
          this.alertService.presentErrorAlert(
            'Error',
            'No se pudo guardar los datos del empleado.'
          );
          this.isSubmitting = false; // Restablecer la bandera de envío
        },
      });
    } else {
      this.alertService.presentErrorAlert(
        'Error',
        'Por favor, complete todos los campos correctamente.'
      );
    }
  }
}
