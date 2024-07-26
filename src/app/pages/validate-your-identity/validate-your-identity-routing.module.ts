import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidateYourIdentityPage } from './validate-your-identity.page';

const routes: Routes = [
  {
    path: '',
    component: ValidateYourIdentityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidateYourIdentityPageRoutingModule {}
