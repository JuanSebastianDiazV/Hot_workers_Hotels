import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { ButtonMenuToggleComponent } from './button-menu-toggle/button-menu-toggle.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuComponent, TabsComponent, ButtonMenuToggleComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [MenuComponent, TabsComponent, ButtonMenuToggleComponent]
})
export class ComponentsModule {}
