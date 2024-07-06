import { Component } from '@angular/core';
import { LoginService } from '../app/services/login/login-service.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public LoginService: LoginService, private menuCtrl: MenuController) {}

  logout() {
    this.LoginService.logout();
    this.menuCtrl.enable(false); // Deshabilitar el menú al cerrar sesión
  }
}
