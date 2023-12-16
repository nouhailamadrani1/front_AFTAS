// hunting.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hunting } from '../models/hunting.model';

@Injectable({
  providedIn: 'root'
})
// hunting.service.ts
// ... other imports ...

@Injectable({
  providedIn: 'root'
})
export class HuntingService {
  private baseUrl = 'http://localhost:8080/aftas/huntings';

  constructor(private http: HttpClient) { }

  saveHunting(hunting: Hunting): Observable<Hunting> {
    return this.http.post<Hunting>(this.baseUrl, hunting);
  }

  // Modify the method to make an HTTP request
  getHuntingById(competitionCode: number, memberNum: number, fishId: number): Observable<Hunting | null> {
    const url = `${this.baseUrl}/find?competitionCode=${competitionCode}&memberNum=${memberNum}&fishId=${fishId}`;
    return this.http.get<Hunting | null>(url);
  }

  getAllHuntings(): Observable<Hunting[]> {
    return this.http.get<Hunting[]>(this.baseUrl);
  }

  updateHunting(updatedHunting: Hunting): Observable<Hunting> {
    return this.http.put<Hunting>(`${this.baseUrl}/${updatedHunting.id}`, updatedHunting);
  }

  deleteHunting(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  
  findExistingHunt(newHuntingData: Hunting): Observable<Hunting> {
    const searchParams = {
      memberNum: newHuntingData.memberNum,
      competitionId: newHuntingData.competitionId,
      fishId: newHuntingData.fishId
    };
  
    // Make sure the endpoint is correct
    return this.http.get<Hunting>(`${this.baseUrl}/hunts`, { params: searchParams });
  }
  
}
