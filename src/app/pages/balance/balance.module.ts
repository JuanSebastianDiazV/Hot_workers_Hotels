import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BalancePageRoutingModule } from './balance-routing.module';
import { BalancePage } from './balance.page';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalancePageRoutingModule,
    ComponentsModule
  ],
  declarations: [BalancePage]
})
export class BalancePageModule {}
