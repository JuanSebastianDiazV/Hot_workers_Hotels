import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

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
    private menuCtrl: MenuController
  ) {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  onSubmit() {
    this.router.navigate(['/otp-reset-password']);
  }
}
