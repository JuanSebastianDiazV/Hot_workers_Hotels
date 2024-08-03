import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController } from '@ionic/angular';
import { AlertService } from '../../services/alerts/alerts.service';
import { ButtonDataService } from '../../services/button-data/button-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login-service.service';
import { Router } from '@angular/router';
import { FormService } from '../../services/form-service/formservice.service';
import { AuthService } from '../../services/auth-service/auth.service'; // Importar el servicio de autenticación

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.page.html',
  styleUrls: ['./entry-form.page.scss'],
})
export class EntryFormPage implements OnInit {
  loginForm!: FormGroup;
  recuperarUsuarioForm!: FormGroup;
  showLoginForm: boolean = true;
  isLoading: boolean = false; // Variable para controlar el loader

  constructor(
    private menuCtrl: MenuController,
    private alertService: AlertService,
    private buttonDataService: ButtonDataService,
    private formBuilder: FormBuilder,
    private loginService: LoginService, // Inyectamos el servicio
    private loadingController: LoadingController, // Inyectamos el LoadingController
    private router: Router,
    private formService: FormService,
    private authService: AuthService // Inyectar el servicio de autenticación
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      type: ['E', Validators.required], // Añadimos type con valor por defecto 'E'
      type: ['E', Validators.required], // Añadimos el campo type con valor por defecto 'U'
    });

    this.formService.setForm('loginForm', this.loginForm);

    this.recuperarUsuarioForm = this.formBuilder.group({
      resetUser: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  getClickedButton() {
    return this.buttonDataService.getClickedButton();
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      await this.presentLoading(); // Mostrar loader

      const { username, password, type } = this.loginForm.value; // Añadimos type
      this.loginService.login(username, password, type).subscribe({
        next: async (response) => {
          await this.dismissLoading(); // Ocultar loader
          if (response && response.user && response.user.id) {
            this.authService.setUserId(response.user.id); // Almacenar el ID del usuario
          if (response) {
            this.menuCtrl.enable(true);
            this.router.navigate(['/home']);
            console.log('Login exitoso', response.user);
          } else {
            console.log('Login fallido');
            await this.alertService.presentErrorAlert(
              'Error',
              response.message
            );
          }
        },
        error: async (error) => {
          console.error('Error en el inicio de sesión:', error);
          await this.dismissLoading(); // Ocultar loader
          await this.alertService.presentErrorAlert(
            'Error',
            'Hubo un problema con el inicio de sesión.'
          );
        },
      });
    }
  }

  onRecuperarUsuarioClick() {
    this.showLoginForm = false;
    this.loginForm.get('username')?.clearValidators();
    this.loginForm.get('username')?.updateValueAndValidity();
    this.loginForm.get('password')?.clearValidators();
    this.loginForm.get('password')?.updateValueAndValidity();
  }

  onCancelarRecuperacionClick() {
    this.showLoginForm = true;
    this.resetLoginForm();
    this.recuperarUsuarioForm.reset();
  }

  async onSubmitRecuperacion() {
    if (this.recuperarUsuarioForm.valid) {
      console.log(this.recuperarUsuarioForm.value);

      this.alertService.presentWarningAlert(
        '¡Solicitud enviada!',
        'Estimado usuario, a tu correo registrado hemos enviado tu usuario.',
        () => {
          this.showLoginForm = true;
          this.resetLoginForm();
          this.recuperarUsuarioForm.reset();
        }
      );
    } else {
      this.alertService.presentErrorAlert(
        'Advertencia',
        'Por favor, ingrese un correo válido.'
      );
    }
  }

  private resetLoginForm() {
    this.loginForm.reset();
    this.loginForm.get('username')?.setValidators(Validators.required);
    this.loginForm.get('username')?.updateValueAndValidity();
    this.loginForm.get('password')?.setValidators(Validators.required);
    this.loginForm.get('password')?.updateValueAndValidity();
  }

  async presentLoading() {
    this.isLoading = true;
    const loader = await this.loadingController.create({
      message: 'iniciando sesión',
      cssClass: 'custom-loader',
      backdropDismiss: true
    });
    await loader.present();

    loader.onDidDismiss().then(() => {
      this.isLoading = false;
    });
  }

  async dismissLoading() {
    if (this.isLoading) {
      this.isLoading = false;
      return await this.loadingController.dismiss().catch(() => {});
    } else {
      return Promise.resolve(); // Aseguramos que siempre se retorna una promesa
    }
  }
}
