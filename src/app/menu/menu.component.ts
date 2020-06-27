import { Component, OnInit } from '@angular/core';
import { Menu } from './../models/menu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menu: Array<Menu> = [
    { name: 'Home', url: '/' },
    { name: 'History', url: '/history' },
    { name: 'Balances', url: '/balances' },
    { name: 'Cards', url: '/cards' },
    { name: 'Recipents', url: '/recipents' },
    { name: 'Raports', url: '/raports' },
    { name: 'Settings', url: '/settings' },
    { name: 'Help', url: '/help' },
    { name: 'Privacy', url: '/privacy' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
