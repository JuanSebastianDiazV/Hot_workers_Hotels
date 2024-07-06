import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage implements OnInit {
  view: string = 'pending'; // Vista actual, puede ser 'pending' o 'upcoming'

  pendingReservations = [
    {
      name: 'Pepe',
      date: 'Domingo, 16 febrero',
      time: '09:00 a.m.',
      location: 'Hotel Las Margaritas',
      amount: '$ 100.000',
    },
    {
      name: 'Pepe',
      date: 'Domingo, 16 febrero',
      time: '09:00 a.m.',
      location: 'Hotel Las Margaritas',
      amount: '$ 100.000',
    },
    {
      name: 'Pepe',
      date: 'Domingo, 16 febrero',
      time: '09:00 a.m.',
      location: 'Hotel Las Margaritas',
      amount: '$ 100.000',
    },
    {
      name: 'Pepe',
      date: 'Domingo, 16 febrero',
      time: '09:00 a.m.',
      location: 'Hotel Las Margaritas',
      amount: '$ 100.000',
    },
  ];

  upcomingReservations = [
    {
      name: 'Pepe',
      date: 'Domingo, 16 febrero',
      time: '09:00 a.m.',
      location: 'Hotel Las Margaritas',
      amount: '$ 100.000',
      status: 'Completada',
    },
    {
      name: 'Pepe',
      date: 'Domingo, 16 febrero',
      time: '09:00 a.m.',
      location: 'Hotel Las Margaritas',
      amount: '$ 100.000',
      status: 'Cancelada',
    },
  ];

  constructor() {}

  ngOnInit() {}

  showPending() {
    this.view = 'pending';
  }

  showUpcoming() {
    this.view = 'upcoming';
  }
}
