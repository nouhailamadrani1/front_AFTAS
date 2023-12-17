import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Competition } from '../models/competition.model';
import { Page } from '../models/page.model';
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

  // getAllCompetitionsPaginated(): Observable<Competition[]> {
  //   const url = `${this.baseUrl}/paginated`;
  //   return this.http.get<Competition[]>(url);
  // }
  getAllCompetitionsPaginated(page: number, size: number): Observable<Page<Competition>> {
    const url = `${this.baseUrl}/paginated`;
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<Page<Competition>>(url, { params });
  }

  getAllCompetitions(): Observable<Competition[]> {
    return this.http.get<Competition[]>(this.baseUrl);
  }

 
}
