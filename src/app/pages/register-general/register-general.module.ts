import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterGeneralPageRoutingModule } from './register-general-routing.module';
import { RegisterGeneralPage } from './register-general.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegisterGeneralPageRoutingModule
  ],
  declarations: [RegisterGeneralPage]
})
export class RegisterGeneralPageModule {}
