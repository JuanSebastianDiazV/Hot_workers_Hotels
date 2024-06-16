import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private alertController: AlertController) {}

  async presentSuccessAlert(header: string, message: string, handler?: () => void) {
    const alert = await this.alertController.create({
      header,
      message,
      cssClass: 'successAlert',
      buttons: [
        {
          text: 'Cerrar',
          cssClass: 'btn-Cerrar',
          handler: () => {
            if (handler) {
              handler();
            }
          },
        },
      ],
    });

    await alert.present();
  }

  async presentErrorAlert(header: string, message: string, handler?: () => void) {
    const alert = await this.alertController.create({
      header,
      message,
      cssClass: 'errorAlert',
      buttons: [
        {
          text: 'Cerrar',
          cssClass: 'btn-Cerrar',
          handler: () => {
            if (handler) {
              handler();
            }
          },
        },
      ],
    });

    await alert.present();
  }

  async presentWarningAlert(header: string, message: string, handler?: () => void) {
    const alert = await this.alertController.create({
      header,
      message,
      cssClass: 'warningAlert',
      buttons: [
        {
          text: 'Cerrar',
          cssClass: 'btn-Cerrar',
          handler: () => {
            if (handler) {
              handler();
            }
          },
        },
      ],
    });

    await alert.present();
  }
}
