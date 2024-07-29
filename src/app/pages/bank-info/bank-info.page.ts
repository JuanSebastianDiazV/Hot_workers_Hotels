import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alerts/alerts.service';
import { ProfileProgressService } from '../../services/profile-progress-service/profile-progress-service.service';
import { BankService } from '../../services/bank-service/bank.service';
import { DataService } from '../../services/data-service/data.service';

@Component({
  selector: 'app-bank-info',
  templateUrl: './bank-info.page.html',
  styleUrls: ['./bank-info.page.scss'],
})
export class BankInfoPage implements OnInit {
  bankInfoForm!: FormGroup;
  banks: { id: string, name: string }[] = [];
  isNequi: boolean = false;
  isSaving: boolean = false; // Variable para manejar el estado del guardado

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private progressService: ProfileProgressService,
    private alertService: AlertService,
    private bankService: BankService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.bankInfoForm = this.formBuilder.group({
      bank: ['', Validators.required],
      accountType: ['', Validators.required],
      accountNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Solo números
      phoneNumber: ['', Validators.pattern('^[0-9]{10}$')] // Solo números y 10 dígitos
    });

    this.bankService.getBanks().subscribe(banks => {
      this.banks = banks;
    });

    this.bankInfoForm.get('bank')?.valueChanges.subscribe(value => {
      this.isNequi = value.toLowerCase() === 'nequi';
      if (this.isNequi) {
        this.bankInfoForm.get('phoneNumber')?.setValidators([Validators.required, Validators.pattern('^[0-9]{10}$')]);
        this.bankInfoForm.get('accountNumber')?.clearValidators();
      } else {
        this.bankInfoForm.get('phoneNumber')?.clearValidators();
        this.bankInfoForm.get('accountNumber')?.setValidators([Validators.required, Validators.pattern('^[0-9]*$')]);
      }
      this.bankInfoForm.get('phoneNumber')?.updateValueAndValidity();
      this.bankInfoForm.get('accountNumber')?.updateValueAndValidity();
    });
  }

  async save() {
    if (this.bankInfoForm.valid) {
      this.isSaving = true; // Establecer la bandera de guardado

      const formValue = this.bankInfoForm.value;

      // Crear el cuerpo del POST
      const postData = {
        bank: formValue.bank,
        accountType: formValue.accountType,
        accountNumber: this.isNequi ? formValue.phoneNumber : formValue.accountNumber
      };

      // Enviar los datos al servidor usando el servicio de datos
      this.dataService.saveBankInfo(postData).subscribe({
        next: async (response) => {
          console.log('Respuesta del servidor:', response);
          this.isSaving = false; // Restablecer la bandera de guardado

          // Mostrar la alerta de confirmación usando el servicio de alertas
          this.alertService.presentWarningAlert(
            '¡Éxito!',
            'Información Bancaria Actualizada Con Éxito',
            () => {
              this.router.navigate(['/profile']);
            }
          );
        },
        error: async (error) => {
          console.error('Error al guardar la información bancaria:', error);
          this.isSaving = false; // Restablecer la bandera de guardado
          this.alertService.presentErrorAlert('Error', 'No se pudo guardar la información bancaria.');
        }
      });
    }
  }
}
