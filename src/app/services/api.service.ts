import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private apiUrl = 'http://127.0.0.1:8000/api/equipements';
  constructor(private http: HttpClient) {}

  getEquipements(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);  // <-- C'est tout, sans /equipements
}
  getEvenementsByEquipementId(id: number) {
  return this.http.get<any[]>(`http://localhost:8000/api/equipements/${id}`);
}
updateEquipement(id: number, payload: any) {
  return this.http.put(`http://localhost:8000/api/equipements/${id}`, payload);
}

getTicketsByEquipementId(id: number) {
  return this.http.get<any[]>(`http://localhost:8000/api/equipements/${id}/tickets`);
}

}
