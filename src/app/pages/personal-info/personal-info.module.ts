import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PersonalInfoPageRoutingModule } from './personal-info-routing.module';
import { PersonalInfoPage } from './personal-info.page';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalInfoPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [PersonalInfoPage]
})
export class PersonalInfoPageModule {}
