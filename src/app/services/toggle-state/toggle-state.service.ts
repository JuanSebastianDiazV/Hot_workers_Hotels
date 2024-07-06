import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleStateService {
  private _isOnline: boolean = true;

  get isOnline(): boolean {
    return this._isOnline;
  }

  set isOnline(value: boolean) {
    this._isOnline = value;
  }
}
