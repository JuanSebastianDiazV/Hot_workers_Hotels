import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alerts/alerts.service';
import { ProfileProgressService } from '../../services/profile-progress-service/profile-progress-service.service';
@Component({
  selector: 'app-rates',
  templateUrl: './rates.page.html',
  styleUrls: ['./rates.page.scss'],
})
export class RatesPage implements OnInit {
  ratesForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private progressService: ProfileProgressService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.ratesForm = this.formBuilder.group({
      thirtyMinutes: ['', Validators.required],
      oneHour: ['', Validators.required],
      threeHours: ['', Validators.required],
      overnight: ['', Validators.required],
      dayRate: ['', Validators.required]
    });
  }

  save() {
    if (this.ratesForm.valid) {
      // Lógica para guardar los datos
      this.progressService.updateProgress('rates');
      
      // Mostrar la alerta de confirmación usando el servicio de alertas
      this.alertService.presentWarningAlert(
        '¡Éxito!',
        'Tus Tarifas Han Sido Actualizadas Con Éxito',
        () => {
          this.router.navigate(['/profile']);
        }
      );
    }
  }
}
