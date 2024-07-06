import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [MenuComponent, TabsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [MenuComponent, TabsComponent]
})
export class ComponentsModule {}
