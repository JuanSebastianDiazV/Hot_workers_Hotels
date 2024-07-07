import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BankInfoPageRoutingModule } from './bank-info-routing.module';
import { BankInfoPage } from './bank-info.page';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankInfoPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [BankInfoPage]
})
export class BankInfoPageModule {}
