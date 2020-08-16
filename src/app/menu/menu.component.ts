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
      icon: 'home',
    },
    {
      name: 'History',
      url: '/history',
      icon: 'history',
    },
    {
      name: 'Balances',
      url: '/balances',
      icon: 'linear_scale',
    },
    {
      name: 'Cards',
      url: '/cards',
      icon: 'credit_card',
    },
    {
      name: 'Recipients',
      url: '/recipients',
      icon: 'people',
    },
    {
      name: 'Reports',
      url: '/reports',
      icon: 'assessment',
    },
    // {
    //   name: 'Settings',
    //   url: '/settings',
    //   icon: 'settings',
    // },
    // {
    //   name: 'Help',
    //   url: '/help',
    //   icon: 'help_outline',
    // },
    {
      name: 'Privacy',
      url: '/privacy',
      icon: 'privacy_tip',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  select(item) {
    this.eventA.emit(item);
  }
}
