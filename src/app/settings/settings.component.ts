import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SettingsService } from './../services/settings.service';
import { Settings } from './../models/settings';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  settings: Settings;
  profileForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(12),
    ]),
    surname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(3),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(9),
      Validators.pattern('[0-9]*'),
    ]),
  });
  constructor(private settingsService: SettingsService) {
    this.settings = settingsService.settings;
    this.profileForm.get('name').setValue(this.settings.profile.name);
    this.profileForm.get('surname').setValue(this.settings.profile.surname);
    this.profileForm.get('email').setValue(this.settings.profile.email);
    this.profileForm.get('address').setValue(this.settings.profile.address);
    this.profileForm
      .get('phoneNumber')
      .setValue(this.settings.profile.phoneNumber);
  }

  ngOnInit(): void {}
  onSubmit() {
    this.settingsService.handleProfile(this.profileForm.value);
  }
}
