// fish.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fish } from '../models/fish.model';

@Injectable({
  providedIn: 'root'
})
export class FishService {
  private baseUrl = 'http://localhost:8080/aftas/fish';

  constructor(private http: HttpClient) { }

  saveFish(fish: Fish): Observable<Fish> {
    return this.http.post<Fish>(this.baseUrl, fish);
  }

  getFishById(id: number): Observable<Fish> {
    return this.http.get<Fish>(`${this.baseUrl}/${id}`);
  }

  getAllFish(): Observable<Fish[]> {
    return this.http.get<Fish[]>(this.baseUrl);
  }

  updateFish(id: number, updatedFish: Fish): Observable<Fish> {
    return this.http.put<Fish>(`${this.baseUrl}/${id}`, updatedFish);
  }

  deleteFish(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
