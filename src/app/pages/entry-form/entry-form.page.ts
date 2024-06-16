import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertService } from '../../services/alerts/alerts.service';
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
    private alertService: AlertService,
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
}
