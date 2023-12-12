// hunting.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hunting } from '../models/hunting.model';

@Injectable({
  providedIn: 'root'
})
export class HuntingService {
  private baseUrl = 'http://localhost:8080/aftas/huntings';

  constructor(private http: HttpClient) { }

  saveHunting(hunting: Hunting): Observable<Hunting> {
    return this.http.post<Hunting>(this.baseUrl, hunting);
  }

  getHuntingById(id: number): Observable<Hunting> {
    return this.http.get<Hunting>(`${this.baseUrl}/${id}`);
  }

  getAllHuntings(): Observable<Hunting[]> {
    return this.http.get<Hunting[]>(this.baseUrl);
  }

  updateHunting(id: number, updatedHunting: Hunting): Observable<Hunting> {
    return this.http.put<Hunting>(`${this.baseUrl}/${id}`, updatedHunting);
  }

  deleteHunting(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
