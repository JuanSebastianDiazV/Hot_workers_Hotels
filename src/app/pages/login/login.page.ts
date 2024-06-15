import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ModalTermsPage } from '../modal-terms/modal-terms.page';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form!: FormGroup<any>;
  constructor(
    private menuCtrl: MenuController,
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
    this.menuCtrl.enable(false);
  }
    
  initForm(){
    this.form = this.fb.group({
      terms: [false],
    })
  }

  get f() {
    return this.form.controls;
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalTermsPage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.55,
      componentProps: {
        aceptTerms: false,
      },
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.form.setControl('terms', new FormControl(data));
    }
  }

  navigateFolder() {
    this.router.navigate(['/landing']);
  }

  // exitApp() {
  //   navigator['app'].exitApp();
  // }
}
