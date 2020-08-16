import { Injectable } from '@angular/core';
import { Person } from './../models/person';
import { Settings } from './../models/settings';
@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  settings = {
    profile: <Person>{
      name: 'John',
      surname: 'Smith',
      email: 'johnsmith@gmail.com',
      address: 'Duke street Studio',
      phoneNumber: '678532122',
    },
    colors: [],
  };
  constructor() {}
  handleProfile(data: Person) {
    this.settings.profile = data;
  }
}
