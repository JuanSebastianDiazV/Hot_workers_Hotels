import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProfileProgressService {
  private progress: number = 5;

  getProgress() {
    return this.progress;
  }

  updateProgress(section: string) {
    switch (section) {
      case 'personal-info':
        this.progress = 24;
        break;
      case 'bank-info':
        this.progress = 43;
        break;
      case 'photos-videos':
        this.progress = 62;
        break;
      case 'description':
        this.progress = 81;
        break;
      case 'rates':
        this.progress = 100;
        break;
    }
  }
}
