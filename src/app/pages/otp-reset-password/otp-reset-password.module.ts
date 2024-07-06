import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OtpResetPasswordPageRoutingModule } from './otp-reset-password-routing.module';
import { OtpResetPasswordPage } from './otp-reset-password.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    OtpResetPasswordPageRoutingModule
  ],
  declarations: [OtpResetPasswordPage]
})
export class OtpResetPasswordPageModule {}
