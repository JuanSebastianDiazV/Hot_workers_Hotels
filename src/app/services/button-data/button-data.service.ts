import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ButtonDataService {
  private clickedButton: string = '';

  setClickedButton(buttonName: string) {
    this.clickedButton = buttonName;
  }

  getClickedButton() {
    return this.clickedButton;
  }
}
