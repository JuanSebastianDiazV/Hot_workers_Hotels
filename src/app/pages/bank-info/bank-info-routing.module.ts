import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankInfoPage } from './bank-info.page';

const routes: Routes = [
  {
    path: '',
    component: BankInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankInfoPageRoutingModule {}
