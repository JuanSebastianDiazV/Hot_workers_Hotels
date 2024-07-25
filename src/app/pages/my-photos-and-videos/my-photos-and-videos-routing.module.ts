import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPhotosAndVideosPage } from './my-photos-and-videos.page';

const routes: Routes = [
  {
    path: '',
    component: MyPhotosAndVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPhotosAndVideosPageRoutingModule {}
