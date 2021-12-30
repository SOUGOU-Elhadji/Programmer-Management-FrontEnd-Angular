import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Programmer } from './programmer';

@Injectable({
  providedIn: 'root'
})
export class ProgrammerService {

  private baseURL = "http://localhost:8080/programmers-api/programmers";
  constructor(private httpClient: HttpClient) { }

  getProgrammerList(): Observable<Programmer[]>{
    return this.httpClient.get<Programmer[]>(`${this.baseURL}`);
  }

  createProgrammer(programmer: Programmer): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, programmer);
  }

  getProgrammerById(id: number): Observable<Programmer>{
    return this.httpClient.get<Programmer>(`${this.baseURL}/${id}`);
  }
  updateProgrammer(id: number, programmer: Programmer): Observable<Object>{
    return this.httpClient.put<Programmer>(`${this.baseURL}/${id}`, programmer);
  }

  deleteProgrammer(id: number): Observable<Object>{
    return this.httpClient.delete<Programmer>(`${this.baseURL}/${id}`);
  }
}
