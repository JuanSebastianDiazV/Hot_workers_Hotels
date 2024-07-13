import { Component, OnInit } from '@angular/core';

interface Reservation {
  name: string;
  date: string;
  time: string;
  location: string;
  amount: string;
  status: string;
}

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage implements OnInit {
  view: string = 'pending';
  pendingReservations: Reservation[] = [];
  upcomingReservations: Reservation[] = [];
  historyReservations: Reservation[] = [];

  ngOnInit() {
    this.loadReservations();
  }

  loadReservations() {
    // Aquí cargarías tus datos de las reservas
    this.pendingReservations = [
      { name: 'Pepe', date: 'Domingo, 16 febrero', time: '09:00 a.m.', location: 'Hotel Las Margaritas', amount: '$ 100.000', status: 'Pendiente' },
      { name: 'Juan', date: 'Lunes, 17 febrero', time: '10:00 a.m.', location: 'Hotel Central', amount: '$ 150.000', status: 'Pendiente' },
      { name: 'María', date: 'Martes, 18 febrero', time: '11:00 a.m.', location: 'Hotel Sunset', amount: '$ 200.000', status: 'Pendiente' },
    ];

    this.upcomingReservations = [
      { name: 'Carlos', date: 'Miércoles, 19 febrero', time: '12:00 p.m.', location: 'Hotel Sunrise', amount: '$ 120.000', status: 'Completada' },
      { name: 'Ana', date: 'Jueves, 20 febrero', time: '01:00 p.m.', location: 'Hotel Horizon', amount: '$ 180.000', status: 'Completada' },
    ];

    this.historyReservations = [
      { name: 'Luis', date: 'Viernes, 21 febrero', time: '02:00 p.m.', location: 'Hotel Paradise', amount: '$ 130.000', status: 'Cancelada' },
      { name: 'aaaq', date: 'Sábado, 22 febrero', time: '03:00 p.m.', location: 'Hotel Oasis', amount: '$ 140.000', status: 'Cancelada' },
      { name: 'Pepe', date: 'Domingo, 23 febrero', time: '04:00 p.m.', location: 'Hotel Las Margaritas', amount: '$ 100.000', status: 'Completada' },
    ];
  }

  setView(view: string) {
    this.view = view;
  }

  acceptReservation(reserva: Reservation) {
    reserva.status = 'Completada';
    this.upcomingReservations.unshift(reserva);
    this.pendingReservations = this.pendingReservations.filter(r => r !== reserva);
  }

  rejectReservation(reserva: Reservation) {
    reserva.status = 'Cancelada';
    this.historyReservations.unshift(reserva);
    this.pendingReservations = this.pendingReservations.filter(r => r !== reserva);
  }

  cancelReservation(reserva: Reservation) {
    reserva.status = 'Cancelada';
    this.historyReservations.unshift(reserva);
    this.upcomingReservations = this.upcomingReservations.filter(r => r !== reserva);
  }
}
