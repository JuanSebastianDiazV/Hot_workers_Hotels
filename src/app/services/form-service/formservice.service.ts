import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private forms: { [key: string]: FormGroup } = {};

  // Registra un formulario en el servicio
  setForm(formName: string, formGroup: FormGroup) {
    this.forms[formName] = formGroup;
  }

  // Reinicia un formulario específico
  resetForm(formName: string) {
    if (this.forms[formName]) {
      this.forms[formName].reset();
    }
  }

  // Reinicia todos los formularios registrados
  resetAllForms() {
    for (const formName in this.forms) {
      if (this.forms.hasOwnProperty(formName)) {
        this.forms[formName].reset();
      }
    }
  }
}
