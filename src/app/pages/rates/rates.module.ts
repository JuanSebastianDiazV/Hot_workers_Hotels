import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RatesPageRoutingModule } from './rates-routing.module';
import { RatesPage } from './rates.page';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatesPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [RatesPage]
})
export class RatesPageModule {}
