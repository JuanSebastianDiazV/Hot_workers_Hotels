import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ButtonDataService } from '../../services/button-data/button-data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private modalCtrl: ModalController,
    private buttonDataService: ButtonDataService
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }
  
  onButtonClick(buttonName: string) {
    this.buttonDataService.setClickedButton(buttonName);
  }

}
