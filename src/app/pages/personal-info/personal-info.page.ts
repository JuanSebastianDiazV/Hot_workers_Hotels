import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProfileProgressService } from '../../services/profile-progress-service/profile-progress-service.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage implements OnInit {
  personalInfoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private progressService: ProfileProgressService,
    private alertController: AlertController
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
  }

  async save() {
    if (this.personalInfoForm.valid) {
      // Lógica para guardar los datos
      this.progressService.updateProgress('personal-info');
      
      // Muestra el alert de confirmación
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Información Personal Actualizada Con Éxito',
        buttons: ['Aceptar']
      });

      await alert.present();
      
      // Navega de vuelta al perfil después de cerrar el alert
      alert.onDidDismiss().then(() => {
        this.router.navigate(['/profile']);
      });
    }
  }
}
