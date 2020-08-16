import { Component, OnInit, DoCheck } from '@angular/core';
import { Person } from './../models/person';
import { SettingsService } from './../services/settings.service';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit, DoCheck {
  person: Person;
  constructor(public settingsService: SettingsService) {}
  ngOnInit() {}
  ngDoCheck() {
    this.person = this.settingsService.settings.profile;
  }
}
