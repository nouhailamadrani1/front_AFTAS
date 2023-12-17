import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private baseUrl = 'http://localhost:8080/aftas/members';

  constructor(private http: HttpClient) { }

  getAllMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.baseUrl);
  }

  getMemberByNum(num: number): Observable<Member> {
    return this.http.get<Member>(`${this.baseUrl}/${num}`);
  }

  saveMember(member: Member): Observable<Member> {
    return this.http.post<Member>(this.baseUrl, member);
  }

  updateMember(num: number, updatedMember: Member): Observable<Member> {
    return this.http.put<Member>(`${this.baseUrl}/${num}`, updatedMember);
  }

  deleteMember(num: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${num}`);
  }

}
