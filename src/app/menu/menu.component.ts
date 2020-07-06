import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Menu } from './../models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Output()
  eventA = new EventEmitter<string>();
  menu: Array<Menu> = [
    {
      name: 'Home',
      url: '/',
      icon: 'assets/images/menu-icons/recipents.png',
    },
    {
      name: 'History',
      url: '/history',
      icon: 'assets/images/menu-icons/history.png',
    },
    {
      name: 'Balances',
      url: '/balances',
      icon: 'assets/images/menu-icons/balances.png',
    },
    {
      name: 'Cards',
      url: '/cards',
      icon: 'assets/images/menu-icons/cards.png',
    },
    {
      name: 'Recipents',
      url: '/recipents',
      icon: 'assets/images/menu-icons/recipents.png',
    },
    {
      name: 'Raports',
      url: '/raports',
      icon: 'assets/images/menu-icons/raports.png',
    },
    {
      name: 'Settings',
      url: '/settings',
      icon: 'assets/images/menu-icons/settings.png',
    },
    {
      name: 'Help',
      url: '/help',
      icon: 'assets/images/menu-icons/help.png',
    },
    {
      name: 'Privacy',
      url: '/privacy',
      icon: 'assets/images/menu-icons/privacy.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  select(item) {
    this.eventA.emit(item);
  }
}
