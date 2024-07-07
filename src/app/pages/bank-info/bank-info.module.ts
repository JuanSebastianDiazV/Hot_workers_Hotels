import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankInfoPageRoutingModule } from './bank-info-routing.module';

import { BankInfoPage } from './bank-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankInfoPageRoutingModule
  ],
  declarations: [BankInfoPage]
})
export class BankInfoPageModule {}
