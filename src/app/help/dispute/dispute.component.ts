import { Component, OnInit, Input } from '@angular/core';
import { Dispute } from './../../models/dispute';
@Component({
  selector: 'app-dispute',
  templateUrl: './dispute.component.html',
  styleUrls: ['./dispute.component.css'],
})
export class DisputeComponent implements OnInit {
  @Input() dispute: Dispute;
  constructor() {}

  ngOnInit(): void {}
}
