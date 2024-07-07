import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProfileProgressService } from '../../services/profile-progress-service/profile-progress-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  progress: number;
  constructor(
    private router: Router,
    private progressService: ProfileProgressService
  ) {
    this.progress = this.progressService.getProgress();
  }

  ngOnInit() {}

  navigateTo(section: string) {
    this.router.navigate([`/${section}`]);
  }

  getProgressColor(): string {
    if (this.progress <= 5) {
      return 'gray';
    } else if (this.progress <= 24) {
      return 'yellow';
    } else if (this.progress <= 43) {
      return 'orange';
    } else if (this.progress <= 62) {
      return 'lightgreen';
    } else if (this.progress <= 81) {
      return 'green';
    } else {
      return 'darkgreen';
    }
  }
}
