import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alerts/alerts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-photos-videos',
  templateUrl: './photos-videos.page.html',
  styleUrls: ['./photos-videos.page.scss'],
})
export class PhotosVideosPage implements OnInit {

  constructor(
    private alertService: AlertService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.alertService.presentErrorAlert(
      '¡Error!',
      'Id photos failed 112125',
      () => {
        this.router.navigate(['/profile']);
      }
    );
  }

}
