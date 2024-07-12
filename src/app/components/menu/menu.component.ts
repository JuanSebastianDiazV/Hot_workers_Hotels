import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginService } from '../../services/login/login-service.service';
import { FormService } from '../../services/form-service/formservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent{

  constructor(private menuCtrl: MenuController, private router: Router, private loginService: LoginService,  private formService: FormService) { }

  closeMenu() {
    this.menuCtrl.close();
  }

  logout() {
    this.loginService.logout();
     this.formService.resetForm('loginForm');
    this.router.navigate(['/entry-form']);
    this.menuCtrl.close();
  }
}
