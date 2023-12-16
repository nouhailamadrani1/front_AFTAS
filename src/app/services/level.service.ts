import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Level } from '../models/level.model';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  private baseUrl = 'http://localhost:8080/aftas/levels';

  constructor(private http: HttpClient) { }

  getAllLevels(): Observable<Level[]> {
    return this.http.get<Level[]>(this.baseUrl);
  }

  getLevelById(id: number): Observable<Level> {
    return this.http.get<Level>(`${this.baseUrl}/${id}`);
  }

  saveLevel(level: Level): Observable<Level> {
    return this.http.post<Level>(this.baseUrl, level);
  }

  updateLevel(id: number, updatedLevel: Level): Observable<Level> {
    return this.http.put<Level>(`${this.baseUrl}/${id}`, updatedLevel);
  }

  deleteLevel(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
