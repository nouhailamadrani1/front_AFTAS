// competition.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Time } from "@angular/common";
import { Competition } from '../models/competition.model';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private baseUrl = 'http://localhost:8080/aftas/competitions';

  constructor(private http: HttpClient) { }

  saveCompetition(competition: Competition): Observable<Competition> {
    return this.http.post<Competition>(this.baseUrl, competition);
  }

  getCompetitionById(id: number): Observable<Competition> {
    return this.http.get<Competition>(`${this.baseUrl}/${id}`);
  }

  updateCompetition(id: number, updatedCompetition: Competition): Observable<Competition> {
    return this.http.put<Competition>(`${this.baseUrl}/${id}`, updatedCompetition);
  }

  deleteCompetition(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllCompetitions(): Observable<Competition[]> {
    return this.http.get<Competition[]>(this.baseUrl);
  }
}
