import { Component, Input } from '@angular/core';
import { Bike } from '../../models/bike';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bike-list',
  templateUrl: 'bike-list.component.html',
  imports: [RouterLink],
})
export class BikeListComponent {
  @Input({ required: true }) bikes: Bike[] = [];
}
