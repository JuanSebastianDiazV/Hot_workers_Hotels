import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  reviews = [
    {
      stars: [1, 2, 3, 4, 5],
      text: 'La worker fue muy...',
      improvement: 'Debe mejorar su atención en...'
    },
    {
      stars: [1, 2, 3, 4],
      text: 'La worker fue muy...',
      improvement: 'Debe mejorar su atención en...'
    },
    {
      stars: [1, 2, 3, 4, 5],
      text: 'La worker fue muy...',
      improvement: 'Debe mejorar su atención en...'
    },
    {
      stars: [1, 2, 3, 4],
      text: 'La worker fue muy...',
      improvement: 'Debe mejorar su atención en...'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
