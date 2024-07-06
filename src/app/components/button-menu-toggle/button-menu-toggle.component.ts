import { Component, OnInit } from '@angular/core';
import { ToggleStateService } from '../../services/toggle-state/toggle-state.service';

@Component({
  selector: 'app-button-menu-toggle',
  templateUrl: './button-menu-toggle.component.html',
  styleUrls: ['./button-menu-toggle.component.scss'],
})
export class ButtonMenuToggleComponent implements OnInit {
  isOnline: boolean = true;
  constructor(private toggleStateService: ToggleStateService) {}

  ngOnInit() {
    this.isOnline = this.toggleStateService.isOnline;
  }

  toggleStatus(event: any) {
    this.isOnline = event.detail.checked;
    this.toggleStateService.isOnline = this.isOnline;
  }
}
