// ranking.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ranking } from '../models/ranking.model';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  private baseUrl = 'http://localhost:8080/aftas/rankings';

  constructor(private http: HttpClient) { }

  saveRanking(ranking: Ranking): Observable<Ranking> {
    return this.http.post<Ranking>(this.baseUrl, ranking);
  }

  getRankingById(id: number): Observable<Ranking> {
    return this.http.get<Ranking>(`${this.baseUrl}/${id}`);
  }

  getAllRankings(): Observable<Ranking[]> {
    return this.http.get<Ranking[]>(this.baseUrl);
  }

  updateRanking(id: number, updatedRanking: Ranking): Observable<Ranking> {
    return this.http.put<Ranking>(`${this.baseUrl}/${id}`, updatedRanking);
  }

  deleteRanking(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
