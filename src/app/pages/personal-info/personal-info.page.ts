import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProfileProgressService } from '../../services/profile-progress-service/profile-progress-service.service';
import { FormService } from '../../services/form-service/formservice.service';
import { EmployeeService } from '../../services/employee-service/employee.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage implements OnInit {
  personalInfoForm!: FormGroup;
  isSaving: boolean = false; // Variable para manejar el estado del guardado

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private progressService: ProfileProgressService,
    private alertController: AlertController,
    private formService: FormService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.personalInfoForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required],
      birthDate: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      user: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.formService.setForm('personalInfo', this.personalInfoForm); // Registra el formulario
  }

  async save() {
    if (this.personalInfoForm.valid) {
      this.isSaving = true; // Mostrar el spinner

      const formValue = this.personalInfoForm.value;
      const postData = {
        ...formValue,
      };

      this.employeeService.saveEmployeeData(postData).subscribe({
        next: async (response) => {
          this.isSaving = false; // Ocultar el spinner
          this.progressService.updateProgress('personal-info');

          const alert = await this.alertController.create({
            header: 'Éxito',
            message: 'Información Personal Actualizada Con Éxito',
            buttons: ['Aceptar']
          });

          await alert.present();

          alert.onDidDismiss().then(() => {
            this.router.navigate(['/profile']);
          });
        },
        error: async (error) => {
          console.error('Error al guardar la información personal:', error);
          this.isSaving = false; // Ocultar el spinner
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Hubo un problema al guardar la información personal. Inténtelo nuevamente.',
            buttons: ['Aceptar']
          });

          await alert.present();
        }
      });
    }
  }
}
