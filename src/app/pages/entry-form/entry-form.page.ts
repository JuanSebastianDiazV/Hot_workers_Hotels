import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ButtonDataService } from '../../services/button-data/button-data.service';


@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.page.html',
  styleUrls: ['./entry-form.page.scss'],
})
export class EntryFormPage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private modalCtrl: ModalController,
    private buttonDataService: ButtonDataService
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  getClickedButton() {
    return this.buttonDataService.getClickedButton();
  }

}
