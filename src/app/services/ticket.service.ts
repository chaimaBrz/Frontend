import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = '/api/ticket_incidents';  // Grâce au proxy.conf.json

  constructor(private http: HttpClient) {}

  createTicket(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getAllTickets(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTicketById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  updateTicket(id: number, payload: any) {
  return this.http.put(`http://localhost:8000/api/ticket_incidents/${id}`, payload);
}

deleteTicket(id: number) {
  return this.http.delete(`http://localhost:8000/api/ticket_incidents/${id}`);
}

}
