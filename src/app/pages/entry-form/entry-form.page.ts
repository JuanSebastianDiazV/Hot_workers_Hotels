import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { ButtonDataService } from '../../services/button-data/button-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.page.html',
  styleUrls: ['./entry-form.page.scss'],
})
export class EntryFormPage implements OnInit {
  loginForm!: FormGroup;
  recuperarUsuarioForm!: FormGroup;
  showLoginForm: boolean = true;

  constructor(
    private menuCtrl: MenuController,
    private alertController: AlertController,
    private buttonDataService: ButtonDataService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

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

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
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

      // Muestra la alerta utilizando Ionic
      const alert = await this.alertController.create({
        header: '¡Solicitud enviada!',
        message: 'Estimado usuario a tu correo registrado hemos enviado tu usuario.',
        cssClass: 'sweetAlert1',
        buttons: [
          {
            text: 'Cerrar',
            cssClass: 'btn-Cerrar',
            handler: () => {
              this.showLoginForm = true;
              this.resetLoginForm();
              this.recuperarUsuarioForm.reset();
            },
          },
        ],
      });

      await alert.present();

      // Restablece el formulario y muestra el formulario de inicio de sesión nuevamente
      await alert.onDidDismiss();
      this.showLoginForm = true;
      this.resetLoginForm();
      this.recuperarUsuarioForm.reset();
    }
  }

  private resetLoginForm() {
    this.loginForm.reset();
    this.loginForm.get('username')?.setValidators(Validators.required);
    this.loginForm.get('username')?.updateValueAndValidity();
    this.loginForm.get('password')?.setValidators(Validators.required);
    this.loginForm.get('password')?.updateValueAndValidity();
  }
}
