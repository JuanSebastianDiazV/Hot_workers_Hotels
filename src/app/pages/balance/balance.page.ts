import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {
  view: string = 'earnings'; // Vista actual, puede ser 'earnings' o 'paymentHistory'

  earnings = [
    {
      name: 'Pepe',
      date: 'Domingo, 16 febrero',
      time: '09:00 a.m.',
      location: 'Hotel Las Margaritas',
      amount: '$ 100.000'
    },
    {
      name: 'Ana',
      date: 'Lunes, 17 febrero',
      time: '10:00 a.m.',
      location: 'Hotel Las Margaritas',
      amount: '$ 150.000'
    }
  ];

  paymentHistory = [
    {
      name: 'Juan',
      date: 'Lunes, 17 febrero',
      time: '10:00 a.m.',
      location: 'Hotel Los Andes',
      amount: '$ 200.000'
    },
    {
      name: 'Carlos',
      date: 'Martes, 18 febrero',
      time: '11:00 a.m.',
      location: 'Hotel Los Pinos',
      amount: '$ 150.000'
    }
  ];

  constructor() { }

  ngOnInit() { }

  showEarnings() {
    this.view = 'earnings';
  }

  showPaymentHistory() {
    this.view = 'paymentHistory';
  }
}
