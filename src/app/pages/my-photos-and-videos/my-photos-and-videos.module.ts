import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyPhotosAndVideosPageRoutingModule } from './my-photos-and-videos-routing.module';
import { MyPhotosAndVideosPage } from './my-photos-and-videos.page';
import { ComponentsModule } from '../../components/components.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPhotosAndVideosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MyPhotosAndVideosPage]
})
export class MyPhotosAndVideosPageModule {}
