import { Component, OnInit } from '@angular/core';
import { RecipientsList } from './../../models/recipients-list';
import { RecipientsService } from './../../services/recipients.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  recipientsList: Array<RecipientsList> = [];
  constructor(private recipientsService: RecipientsService) {
    this.recipientsList = recipientsService.getRecipients();
  }
  ngOnInit(): void {}
}
