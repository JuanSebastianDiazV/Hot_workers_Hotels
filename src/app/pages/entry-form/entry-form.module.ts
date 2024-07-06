import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EntryFormPageRoutingModule } from './entry-form-routing.module';
import { EntryFormPage } from './entry-form.page';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    EntryFormPageRoutingModule
  ],
  declarations: [EntryFormPage]
})
export class EntryFormPageModule {}
