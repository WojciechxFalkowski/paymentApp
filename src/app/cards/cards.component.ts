import { Component, OnInit } from '@angular/core';
import { Card } from './../models/card';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  card: Array<Card> = [
    {
      name: 'Polish Bank',
      number: '0000 1111 2222 3333',
      expiryDate: new Date(2025, 7),
      holderDetails: 'Adam Nowak',
      url: 'url(assets/images/cards/ship-640x438.jpg)',
    },
    {
      name: 'Millenium',
      number: '1234 5678 9123 4567',
      expiryDate: new Date(2026, 9),
      holderDetails: 'Adam Nowak',
      url: 'url(assets/images/cards/shelby-640×350.jpg)',
    },
    {
      name: 'Santander',
      number: '9999 5555 3322 1231',
      expiryDate: new Date(2028, 11),
      holderDetails: 'Adam Nowak',
      url: 'url(assets/images/cards/plane-640×426.jpg)',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
