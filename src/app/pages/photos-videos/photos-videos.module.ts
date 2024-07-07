import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotosVideosPageRoutingModule } from './photos-videos-routing.module';

import { PhotosVideosPage } from './photos-videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotosVideosPageRoutingModule
  ],
  declarations: [PhotosVideosPage]
})
export class PhotosVideosPageModule {}
