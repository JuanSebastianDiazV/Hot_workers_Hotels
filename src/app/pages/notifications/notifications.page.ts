import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notifications = [
    {
      message: 'Andres quiere agendar una cita contigo',
      linkText: 'Ir a la gestión de reservas',
    },
    {
      message: 'Pepe canceló tu reserva',
      linkText: 'Ir a la gestión de reservas',
    },
    {
      message: 'Pepe canceló tu reserva',
      linkText: 'Ir a la gestión de reservas',
    },
    {
      message: 'Mau canceló tu reserva',
      linkText: 'Ir a la gestión de reservas',
    },
    {
      message: 'Pepe quiere agendar una cita contigo',
      linkText: 'Ir a la gestión de reservas',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
