import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alerts/alerts.service';
import { ProfileProgressService } from '../../services/profile-progress-service/profile-progress-service.service';

@Component({
  selector: 'app-bank-info',
  templateUrl: './bank-info.page.html',
  styleUrls: ['./bank-info.page.scss'],
})
export class BankInfoPage implements OnInit {
  bankInfoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private progressService: ProfileProgressService,
    private alertService: AlertService  // Asegúrate de que este es el nombre correcto del servicio de alertas
  ) {}

  ngOnInit() {
    this.bankInfoForm = this.formBuilder.group({
      bank: ['', Validators.required],
      accountType: ['', Validators.required],
      accountNumber: ['', Validators.required]
    });
  }

  save() {
    if (this.bankInfoForm.valid) {
      // Lógica para guardar los datos
      this.progressService.updateProgress('bank-info');
      
      // Mostrar la alerta de confirmación usando el servicio de alertas
      this.alertService.presentWarningAlert(
        '¡Éxito!',
        'Información Bancaria Actualizada Con Éxito',
        () => {
          this.router.navigate(['/profile']);
        }
      );
    }
  }
}
