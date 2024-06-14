import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

}
