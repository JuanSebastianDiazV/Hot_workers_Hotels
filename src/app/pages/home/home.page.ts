import { Component, OnInit } from '@angular/core';
import { ButtonDataService } from '../../services/button-data/button-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  address: string = '';
  location: string | null = null;
  addressSaved: boolean = false;
  showAddressForm: boolean = false;

  constructor(private buttonDataService: ButtonDataService) {}

  ngOnInit(): void {
    this.loadAddress();
  }

  toggleAddressForm() {
    this.showAddressForm = !this.showAddressForm;
  }

  saveAddress() {
    localStorage.setItem('address', this.address);
    this.location = this.address;
    this.address = '';
    this.addressSaved = true;
    this.showAddressForm = false;
  }

  loadAddress() {
    const storedAddress = localStorage.getItem('address');
    if (storedAddress) {
      this.address = '';
      this.location = storedAddress;
      this.addressSaved = true;
    }
  }

  getClickedButton() {
    return this.buttonDataService.getClickedButton();
  }
}
