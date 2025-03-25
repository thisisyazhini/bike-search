import { Component, inject, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { Bike } from '../../models/bike';
import { FormsModule } from '@angular/forms';
import { BikeListComponent } from '../bike-list/bike-list.component';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-bike-search',
  templateUrl: 'bike-search.component.html',
  imports: [FormsModule, BikeListComponent],
})
export class BikeSearchComponent implements OnInit {
  bikeLocation = '';
  bikes: Bike[] | undefined = undefined;
  loading = false;
  private bikeService = inject(BikeService);

  constructor() {}

  ngOnInit() {}

  fetchBikes() {
    this.loading = true;
    this.bikeService
      .getBikesBasedOnLocation(this.bikeLocation)
      .pipe(
        catchError((_, caught) => {
          this.loading = false;
          return caught;
        })
      )
      .subscribe((data) => {
        this.bikes = data.bikes;
        this.loading = false;
      });
  }
}
