import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alerts/alerts.service';
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
import { UserDataServiceService } from '../../services/user-data-service/user-data-service.service';

@Component({
  selector: 'app-otp-reset-password',
  templateUrl: './otp-reset-password.page.html',
  styleUrls: ['./otp-reset-password.page.scss'],
})
export class OtpResetPasswordPage implements OnInit, OnDestroy {
  otp: string = '';
  otpArray: string[] = new Array(6).fill('');
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  timer: number = 0;
  timerSubscription: Subscription = new Subscription(); // Inicialización predeterminada
  buttonText: string = 'Solicitar Código'; // Texto del botón inicial
  correctOtp: string = '123456'; // Código OTP correcto simulado
  isRequestingCode: boolean = false; // Variable para evitar doble clic
  email: string = ''; // Para almacenar el correo del usuario

  constructor(
    private router: Router,
    private alertService: AlertService,
    private menuCtrl: MenuController,
    private http: HttpClient, // Inyecta HttpClient
    private userDataService: UserDataServiceService // Inyecta UserDataService
  ) {}

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.email = this.userDataService.getEmail(); // Obtén el correo del usuario
    console.log('Email obtenido:', this.email); // Añadir un log para verificar
    // No iniciar el temporizador aquí
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe(); // Asegúrate de cancelar la suscripción para evitar fugas de memoria
    }
  }

  startTimer(seconds: number) {
    this.timer = seconds * 1000; // Convertir a milisegundos
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe(); // Cancelar cualquier suscripción previa
    }

    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.timer > 0) {
        this.timer -= 1000; // Reducir el tiempo en 1 segundo (1000 milisegundos)
      } else {
        if (this.timerSubscription) {
          this.timerSubscription.unsubscribe(); // Cancelar la suscripción cuando el tiempo se agote
        }
        this.buttonText = 'Solicitar Nuevo Código'; // Actualizar el texto del botón
        this.isRequestingCode = false; // Permitir solicitar un nuevo código
      }
    });
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

  clearOtpFields() {
    this.otp = '';
    this.otpArray = new Array(6).fill('');
  }

  requestNewCode() {
    this.isRequestingCode = true; // Deshabilitar el botón inmediatamente
    this.buttonText = 'Código Solicitado'; // Actualizar el texto del botón

    this.clearOtpFields(); // Restablecer OTP y OTP array

    const payload = { email: this.email }; // Crear el payload con el correo del usuario

    // Llamada al servicio HTTP POST con el payload
    this.http.post('https://jsonplaceholder.typicode.com/posts', payload)
      .subscribe(() => {
        this.startTimer(5 * 60); // Iniciar el temporizador con 5 minutos
        console.log('Nuevo código solicitado');
      }, error => {
        this.isRequestingCode = false;
        this.buttonText = 'Solicitar Código';
        console.error('Error al solicitar el código', error);
        this.alertService.presentErrorAlert('Error', 'No se pudo solicitar el código. Por favor, intenta nuevamente.');
        this.clearOtpFields(); // Restablecer OTP y OTP array si hay error
      });
  }

  continue() {
    // this.router.navigate(['/new-password']);
    if (this.otp.length === 6) {
      if (this.otp === this.correctOtp) {
        this.router.navigate(['/new-password']);
      } else {
        this.alertService.presentErrorAlert(
          'Error',
          'El código ingresado es incorrecto.'
        );
        this.clearOtpFields();
      }
    } else {
      this.alertService.presentErrorAlert(
        'Advertencia',
        'Por favor, ingresa un código de 6 dígitos.'
      );
      this.clearOtpFields();
    }
  }
}
