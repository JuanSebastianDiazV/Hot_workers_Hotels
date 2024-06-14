import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ButtonDataService } from '../../services/button-data/button-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.page.html',
  styleUrls: ['./entry-form.page.scss'],
})
export class EntryFormPage implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private menuCtrl: MenuController,
    private modalCtrl: ModalController,
    private buttonDataService: ButtonDataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.formEntryForm();
  }

  formEntryForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  getClickedButton() {
    return this.buttonDataService.getClickedButton();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
