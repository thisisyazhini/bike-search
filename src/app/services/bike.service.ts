import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bike } from '../models/bike';
import { apiBaseUrl } from '../utils/constants';

@Injectable({ providedIn: 'root' })
export class BikeService {
  private http = inject(HttpClient);

  getBikesBasedOnLocation(location: string): Observable<{ bikes: Bike[] }> {
    return this.http.get<{ bikes: Bike[] }>(`${apiBaseUrl}/search`, {
      params: {
        page: 1,
        per_page: 25,
        location,
        distance: 10,
        stolenness: 'proximity',
      },
    });
  }

  getBikeById(id: number): Observable<{ bike: Bike }> {
    return this.http.get<{ bike: Bike }>(`${apiBaseUrl}/bikes/${id}`);
  }
}
