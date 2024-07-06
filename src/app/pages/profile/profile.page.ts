import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alerts/alerts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private alertService: AlertService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.alertService.presentErrorAlert(
      'Error',
      'Hubo un problema con el cargue de los datos del perfil',
      () => {
        this.router.navigate(['/home']);
        
      }
    );
  }

}
