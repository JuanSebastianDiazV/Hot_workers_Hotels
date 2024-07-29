import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';
import { CameraService } from './../../services/camera-service/camera.service';
import { AlertService } from 'src/app/services/alerts/alerts.service';
import { ButtonDataService } from '../../services/button-data/button-data.service';

@Component({
  selector: 'app-my-photos-and-videos',
  templateUrl: './my-photos-and-videos.page.html',
  styleUrls: ['./my-photos-and-videos.page.scss'],
})
export class MyPhotosAndVideosPage implements OnInit {
  photos: { url: string | null }[] = [];
  videos: { url: string | null }[] = [];

  constructor(
    private cameraService: CameraService,
    private actionSheetController: ActionSheetController,
    private alertService: AlertService,
    private buttonDataService: ButtonDataService
  ) {}

  ngOnInit() {
    this.initializeMediaArrays();
  }

  initializeMediaArrays() {
    this.photos = Array.from({ length: 5 }, () => ({ url: null }));
    this.videos = Array.from({ length: 2 }, () => ({ url: null }));
  }

  async selectPhotoSource(index: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Selecciona una fuente',
      buttons: [
        {
          text: 'Cámara',
          icon: 'camera',
          handler: () => {
            this.addPhoto(index, CameraSource.Camera);
          }
        },
        {
          text: 'Galería',
          icon: 'image',
          handler: () => {
            this.addPhoto(index, CameraSource.Photos);
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  async addPhoto(index: number, source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source
      });

      if (index >= 0 && index < this.photos.length && image.dataUrl) {
        this.photos[index].url = image.dataUrl;
      } else {
        console.error('Índice fuera de rango o dataUrl no disponible:', index, image.dataUrl);
      }
    } catch (error) {
      console.error('Error al tomar la foto', error);
    }
  }

  removePhoto(index: number) {
    if (index >= 0 && index < this.photos.length) {
      this.photos[index].url = null;
    } else {
      console.error('Índice fuera de rango:', index);
    }
  }

  async addVideo(index: number) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'video/*';
    input.onchange = () => {
      const file = input.files?.[0];
      if (file && index >= 0 && index < this.videos.length) {
        const url = URL.createObjectURL(file);
        this.videos[index].url = url;
      }
    };
    input.click();
  }

  removeVideo(index: number) {
    if (index >= 0 && index < this.videos.length) {
      this.videos[index].url = null;
    } else {
      console.error('Índice fuera de rango:', index);
    }
  }

  saveMedia() {
    this.alertService.presentErrorAlert(
      'Error',
      'Hubo un problema con el guardado de fotos.'
    );
    this.cameraService
      .saveMedia({ photos: this.photos, videos: this.videos })
      .subscribe((response) => {
        console.log('Media guardada', response);
      });
  }

  getClickedButton() {
    return this.buttonDataService.getClickedButton();
  }
}
