import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserDataServiceService } from '../../services/user-data-service/user-data-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  emailForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private menuCtrl: MenuController,
    private userDataService: UserDataServiceService
  ) {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  onSubmit() {
    if (this.emailForm.valid) {
      const email = this.emailForm.get('email')?.value;
      this.userDataService.setEmail(email); // Guarda el correo en el servicio
      this.router.navigate(['/otp-reset-password']);
    }
  }
}
