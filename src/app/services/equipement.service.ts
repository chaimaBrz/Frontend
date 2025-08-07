import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {
  private apiUrl = 'http://127.0.0.1:8000/api/equipements';


  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  createEquipement(data: any): Observable<any> {
  return this.http.post(this.apiUrl, data);
}

}