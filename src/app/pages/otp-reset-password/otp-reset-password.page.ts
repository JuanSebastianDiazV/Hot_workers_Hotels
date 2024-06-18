import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alerts/alerts.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-otp-reset-password',
  templateUrl: './otp-reset-password.page.html',
  styleUrls: ['./otp-reset-password.page.scss'],
})
export class OtpResetPasswordPage implements OnInit {
  otp: string = '';
  otpArray: string[] = new Array(6).fill('');

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  constructor(
    private router: Router,
    private alertService: AlertService,
    private menuCtrl: MenuController
  ) {}
  ngOnInit() {
    this.menuCtrl.enable(false);
  }
  addDigit(digit: number) {
    if (this.otp.length < 6) {
      this.otp += digit.toString();
      this.updateOtpArray();
    }
  }

  removeDigit() {
    if (this.otp.length > 0) {
      this.otp = this.otp.slice(0, -1);
      this.updateOtpArray();
    }
  }

  updateOtpArray() {
    this.otpArray = this.otp.split('');
    while (this.otpArray.length < 6) {
      this.otpArray.push('');
    }
  }

  requestNewCode() {
    // Lógica para solicitar un nuevo código
  }

  continue() {
    if (this.otp.length === 6) {
      // Navegar a una nueva ruta
      this.router.navigate(['/new-password']);
    } else {
      // Mostrar mensaje de error o alert
      this.alertService.presentErrorAlert(
        'Advertencia',
        'Por favor, ingresa un código de 6 dígitos.'
      );
    }
  }
}
