import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api'; // À adapter à ton backend Symfony

  constructor(private http: HttpClient) {}

  getEquipements(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/equipements`);
  }
}
