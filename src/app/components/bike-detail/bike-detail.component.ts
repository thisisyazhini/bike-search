import { Component, inject, Input, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { Bike } from '../../models/bike';

@Component({
  selector: 'app-bike-detail',
  templateUrl: 'bike-detail.component.html',
})
export class BikeDetailComponent implements OnInit {
  @Input() id!: number;
  bike: Bike | undefined = undefined;
  private bikeService = inject(BikeService);

  ngOnInit() {
    this.bikeService
      .getBikeById(this.id)
      .subscribe((data) => (this.bike = data.bike));
  }
}
