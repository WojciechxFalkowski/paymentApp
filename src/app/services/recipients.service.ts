import { Injectable } from '@angular/core';
import { RecipientsList } from './../models/recipients-list';
@Injectable({
  providedIn: 'root',
})
export class RecipientsService {
  recipientsList: Array<RecipientsList> = [
    {
      name: 'Agnieszka',
      surname: 'Nowak',
      email: 'agnieszka.nowak@gmail.com',
      accountNumber: '1123 4422 4442 6633',
      phoneNumber: '666777888',
      address: '1234 Main Street',
      city: 'Los Angeles',
      country: 'USA',
      status: false,
    },
    {
      name: 'Peter',
      surname: 'Kowalski',
      email: 'peterkowalski@gmail.com',
      accountNumber: '5552 1231 9666 6577',
      phoneNumber: '767888676',
      address: 'Marszałkowska 5 m. 10',
      city: 'Warsaw',
      country: 'Poland',
      status: false,
    },
    {
      name: 'Weronika',
      surname: 'Nowak',
      email: 'weronikanowak@gmail.com',
      accountNumber: '4222 1111 5555 2321',
      phoneNumber: '678987666',
      address: 'Berliner Innenstadt 1232',
      city: 'Berlin',
      country: 'Germany',
      status: false,
    },
    {
      name: 'Michael',
      surname: 'Kors',
      email: 'michael.kors@gmail.com',
      accountNumber: '2312 4444 2222 5555',
      phoneNumber: '555777886',
      address: '4730  Oak Street',
      city: 'New York',
      country: 'USA',
      status: false,
    },
    {
      name: 'Karolina',
      surname: 'Andres',
      email: 'karolinexandres@gmail.com',
      accountNumber: '2242 8888 9999 6544',
      phoneNumber: '776776444',
      address: '3386  Grasselli Street',
      city: 'Plano',
      country: 'USA',
      status: false,
    },
    {
      name: 'Imran',
      surname: 'Haworth',
      email: 'imran.haworth@gmail.com',
      accountNumber: '4222 4222 1112 2322',
      phoneNumber: '777666788',
      address: '2210  Pickens Way',
      city: 'Monroe',
      country: 'USA',
      status: false,
    },
    {
      name: 'Cole ',
      surname: 'Monaghan',
      email: 'colex.managhan@gmail.com',
      accountNumber: '2214 3821 5191 4353',
      phoneNumber: '647447556',
      address: '2223  Half and Half Drive',
      city: 'California',
      country: 'USA',
      status: false,
    },
    {
      name: 'Valentina ',
      surname: 'Harding',
      email: 'valentinaharding@gmail.com',
      accountNumber: '5225 3221 3211 3333',
      phoneNumber: '534664878',
      address: '942  Daffodil Lane',
      city: 'Berlin',
      country: 'Germany',
      status: false,
    },
    {
      name: 'Maxime ',
      surname: 'Feeney',
      email: 'maxime.feeney@gmail.com',
      accountNumber: '4222 2323 4444 2312',
      phoneNumber: '555666771',
      address: '4730  Oak Street',
      city: 'New York',
      country: 'USA',
      status: false,
    },
    {
      name: 'Corbin ',
      surname: 'Hurley',
      email: 'karolinexandres@gmail.com',
      accountNumber: '2242 8888 9999 6544',
      phoneNumber: '776776444',
      address: '3386  Grasselli Street',
      city: 'New Hampshire',
      country: 'USA',
      status: false,
    },
  ];
  constructor() {}
  getRecipients() {
    return this.recipientsList;
  }
  newRecipient(recipent) {
    this.recipientsList.push(recipent);
    return 0;
  }
}
