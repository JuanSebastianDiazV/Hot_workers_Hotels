import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-menu-toggle',
  templateUrl: './button-menu-toggle.component.html',
  styleUrls: ['./button-menu-toggle.component.scss'],
})
export class ButtonMenuToggleComponent implements OnInit {
  isOnline: boolean = true; // Inicialmente en línea
  constructor() {}

  ngOnInit() {}
  toggleStatus(event: any) {
    this.isOnline = event.detail.checked;
  }
}
