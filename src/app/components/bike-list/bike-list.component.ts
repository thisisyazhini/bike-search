import { Component, Input, OnInit } from '@angular/core';
import { Bike } from '../../models/bike';

@Component({
  selector: 'app-bike-list',
  templateUrl: 'bike-list.component.html',
})
export class BikeListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input({ required: true }) bikes: Bike[] = [];
}
