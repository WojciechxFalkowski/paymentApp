import { Component, OnInit } from '@angular/core';
import { Person } from './../models/person';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  person: Person = {
    name: 'John',
    surname: 'Smith',
    street: 'Duke street Studio',
  };
  constructor() {}

  ngOnInit() {}
}
