import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private apiUrl = 'http://127.0.0.1:8000/api/alertes';

  constructor(private http: HttpClient) {}

  addAlerte(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
  addAlertToEquipement(equipementId: number, data: any) {
  return this.http.post(`http://127.0.0.1:8000/api/equipements/${equipementId}/alertes`, data);
}

}
