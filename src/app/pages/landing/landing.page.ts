import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

}
