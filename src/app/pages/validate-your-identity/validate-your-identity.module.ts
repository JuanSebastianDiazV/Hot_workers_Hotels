import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ValidateYourIdentityPageRoutingModule } from './validate-your-identity-routing.module';
import { ValidateYourIdentityPage } from './validate-your-identity.page';
import { ComponentsModule } from '../../components/components.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidateYourIdentityPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ValidateYourIdentityPage]
})
export class ValidateYourIdentityPageModule {}
