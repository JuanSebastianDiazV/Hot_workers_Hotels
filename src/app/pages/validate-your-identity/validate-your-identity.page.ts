import { AlertService } from './../../services/alerts/alerts.service';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';
import { CameraService } from './../../services/camera-service/camera.service';

@Component({
  selector: 'app-validate-your-identity',
  templateUrl: './validate-your-identity.page.html',
  styleUrls: ['./validate-your-identity.page.scss'],
})
export class ValidateYourIdentityPage implements OnInit {
  frontIdPhoto: { url: string | null } = { url: null };
  backIdPhoto: { url: string | null } = { url: null };
  selfiePhoto: { url: string | null } = { url: null };

  constructor(
    private cameraService: CameraService,
    private actionSheetController: ActionSheetController,
    private alertService: AlertService
    
  ) {}

  ngOnInit() {}

  async selectPhotoSource(photoType: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Selecciona una fuente',
      cssClass: 'red-action-sheet',
      buttons: [
        {
          text: 'Cámara',
          icon: 'camera',
          handler: () => {
            this.addPhoto(photoType, CameraSource.Camera);
          },
        },
        {
          text: 'Galería',
          icon: 'image',
          handler: () => {
            this.addPhoto(photoType, CameraSource.Photos);
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  async addPhoto(photoType: string, source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source,
      });

      if (image.dataUrl) {
        switch (photoType) {
          case 'frontId':
            this.frontIdPhoto.url = image.dataUrl;
            break;
          case 'backId':
            this.backIdPhoto.url = image.dataUrl;
            break;
          case 'selfie':
            this.selfiePhoto.url = image.dataUrl;
            break;
        }
      } else {
        console.error('Error: dataUrl no disponible');
      }
    } catch (error) {
      console.error('Error al tomar la foto', error);
    }
  }

  removePhoto(photoType: string) {
    switch (photoType) {
      case 'frontId':
        this.frontIdPhoto.url = null;
        break;
      case 'backId':
        this.backIdPhoto.url = null;
        break;
      case 'selfie':
        this.selfiePhoto.url = null;
        break;
    }
  }

  saveMedia() {
    this.alertService.presentErrorAlert(
      'Error',
      'Hubo un problema con el guardado de fotos.'
    );
    const media = {
      photos: [
        { type: 'frontIdPhoto', url: this.frontIdPhoto.url },
        { type: 'backIdPhoto', url: this.backIdPhoto.url },
        { type: 'selfiePhoto', url: this.selfiePhoto.url },
      ],
      videos: [],
    };
    this.cameraService.saveMedia(media).subscribe((response) => {
      console.log('Media guardada', response);
    });
  }
}
