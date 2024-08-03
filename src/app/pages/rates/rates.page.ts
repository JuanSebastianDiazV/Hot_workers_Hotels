import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alerts/alerts.service';
import { ProfileProgressService } from '../../services/profile-progress-service/profile-progress-service.service';
import { TimeItemsService } from '../../services/time-items/time-items.service';
import { AuthService } from '../../services/auth-service/auth.service';
import * as moment from 'moment';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.page.html',
  styleUrls: ['./rates.page.scss'],
})
export class RatesPage implements OnInit {
  ratesForm!: FormGroup;
  isSaving: boolean = false; // Variable para manejar el estado del guardado

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private progressService: ProfileProgressService,
    private alertService: AlertService,
    private timeItemsService: TimeItemsService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.ratesForm = this.formBuilder.group({
      thirtyMinutes: ['', Validators.required],
      oneHour: ['', Validators.required],
      threeHours: ['', Validators.required],
      overnight: ['', Validators.required],
      dayRate: ['', Validators.required]
    });

    this.initializeValueChanges();
  }

  initializeValueChanges() {
    Object.keys(this.ratesForm.controls).forEach(key => {
      this.ratesForm.get(key)?.valueChanges.subscribe(value => {
        if (value) {
          const formattedValue = this.formatValue(value);
          if (formattedValue !== value) {
            this.ratesForm.get(key)?.setValue(formattedValue, { emitEvent: false });
          }
        }
      });
    });
  }

  formatValue(value: any): string {
    // Remover caracteres que no sean dígitos
    const numericValue = value.replace(/\D/g, '');
    // Formatear con separadores de miles
    return parseFloat(numericValue).toLocaleString('es-CO', { minimumFractionDigits: 0 });
  }

  save() {
    if (this.ratesForm.valid) {
      this.isSaving = true; // Mostrar el spinner
      const formValue = this.ratesForm.value;
      const timeItemId = this.authService.getUserId(); // Obtener el ID del usuario

      if (!timeItemId) {
        this.isSaving = false;
        this.alertService.presentErrorAlert('Error', 'ID del usuario no disponible.');
        return;
      }

      const postData = {
        cost: formValue.thirtyMinutes.replace(/,/g, ''),
        cost1: formValue.oneHour.replace(/,/g, ''),
        cost2: formValue.threeHours.replace(/,/g, ''),
        cost3: formValue.overnight.replace(/,/g, ''),
        cost4: formValue.dayRate.replace(/,/g, ''),
        updatedAt: moment().toISOString() // Fecha actual
      };
      
      
      this.timeItemsService.updateTimeItem(timeItemId, postData).subscribe({
        next: async (response) => {
          this.isSaving = false; // Ocultar el spinner
          this.progressService.updateProgress('rates');
          
          this.alertService.presentWarningAlert(
            '¡Éxito!',
            'Tus Tarifas Han Sido Actualizadas Con Éxito',
            () => {
              this.router.navigate(['/profile']);
            }
          );
        },
        error: async (error) => {
          console.error('Error al actualizar las tarifas:', error);
          this.isSaving = false; // Ocultar el spinner
          this.alertService.presentErrorAlert('Error', 'Hubo un problema actualizando las tarifas.');
        }
      });
    }
  }
}
