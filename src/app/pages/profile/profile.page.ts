import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alerts/alerts.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  progress: number = 100
  constructor(
    private alertService: AlertService,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.alertService.presentErrorAlert(
    //   'Error',
    //   'Hubo un problema con el cargue de los datos del perfil',
    //   () => {
    //     this.router.navigate(['/home']);
        
    //   }
    // );
  }

  navigateTo(section: string) {
    this.router.navigate([`/${section}`]);
  }

  getProgressColor(): string {
    if (this.progress <= 20) {
      return 'gray';
    } else if (this.progress <= 40) {
      return 'yellow';
    } else if (this.progress <= 60) {
      return 'orange';
    } else if (this.progress <= 80) {
      return 'lightgreen';
    } else {
      return 'green';
    }
  }

}
