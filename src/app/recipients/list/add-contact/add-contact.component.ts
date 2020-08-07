import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RecipientsService } from './../../../services/recipients.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  newContact = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(12),
    ]),
    surname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    accountNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(12),
      Validators.pattern('[0-9]*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(9),
      Validators.pattern('[0-9]*'),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z 0-9]*'),
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    country: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
  });
  constructor(
    private router: Router,
    private recipientsService: RecipientsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.newContact.value);
    this.recipientsService.newRecipient(this.newContact.value);
    console.log(this.newContact.controls.name.valid);
    // this.goBack();
  }
  goBack() {
    this.router.navigate(['/recipients']);
  }
}
