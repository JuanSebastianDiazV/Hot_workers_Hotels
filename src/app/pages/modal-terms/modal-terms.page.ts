import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-modal-terms',
  templateUrl: './modal-terms.page.html',
  styleUrls: ['./modal-terms.page.scss'],
})
export class ModalTermsPage implements OnInit {
  @Input() aceptTerms: any;

  constructor(
    private modalCtrl: ModalController,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  salir() {
    this.modalCtrl.dismiss({
      aceptTerms: true,
    });
  }
}
