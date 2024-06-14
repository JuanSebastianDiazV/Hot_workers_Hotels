import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.page.html',
  styleUrls: ['./entry-form.page.scss'],
})
export class EntryFormPage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

}
