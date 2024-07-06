import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  location: { lat: number; lon: number } | null = null;

  constructor() {}
  ngOnInit(): void {
    this.location = { lat: 40.7128, lon: -74.006 };
  }
}
