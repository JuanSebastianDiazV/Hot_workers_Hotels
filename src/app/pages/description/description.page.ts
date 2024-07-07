import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alerts/alerts.service';
import { ProfileProgressService } from '../../services/profile-progress-service/profile-progress-service.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {
  descriptionForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private progressService: ProfileProgressService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.descriptionForm = this.formBuilder.group({
      description: ['', Validators.required]
    });
  }

  save() {
    if (this.descriptionForm.valid) {
      // Lógica para guardar los datos
      this.progressService.updateProgress('description');
      
      // Mostrar la alerta de confirmación usando el servicio de alertas
      this.alertService.presentWarningAlert(
        '¡Éxito!',
        'Descripción Actualizada Con Éxito',
        () => {
          this.router.navigate(['/profile']);
        }
      );
    }
  }

}
