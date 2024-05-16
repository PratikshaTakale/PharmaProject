import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemlistService {


private apiUrl = 'http://localhost:3000/medicalproducts'; // Example API endpoint

constructor(private http: HttpClient) { }

getData(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}


}

