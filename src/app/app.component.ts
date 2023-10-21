import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Usuario', url: '/folder/Usuario', icon: 'accessibility' },
    { title: 'Worker', url: '/folder/Worker', icon: 'woman' },
    { title: 'Hotel', url: '/folder/Hotel', icon: 'bed' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
