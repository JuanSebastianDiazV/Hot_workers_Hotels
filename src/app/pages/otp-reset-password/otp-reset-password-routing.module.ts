import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpResetPasswordPage } from './otp-reset-password.page';

const routes: Routes = [
  {
    path: '',
    component: OtpResetPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpResetPasswordPageRoutingModule {}
