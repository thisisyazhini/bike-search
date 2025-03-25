import { Component, inject, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { Bike } from '../../models/bike';
import { FormsModule } from '@angular/forms';
import { BikeListComponent } from '../bike-list/bike-list.component';

@Component({
  selector: 'app-bike-search',
  templateUrl: 'bike-search.component.html',
  imports: [FormsModule, BikeListComponent],
})
export class BikeSearchComponent implements OnInit {
  bikeLocation = '';
  bikes: Bike[] = [];
  private bikeService = inject(BikeService);

  constructor() {}

  ngOnInit() {}

  fetchBikes() {
    this.bikeService
      .getBikesBasedOnLocation(this.bikeLocation)
      .subscribe((data) => (this.bikes = data.bikes));
  }
}
