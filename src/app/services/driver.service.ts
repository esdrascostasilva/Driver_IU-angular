import { Injectable } from '@angular/core';
import { Driver } from '../models/driver';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DriverService {

  url = "/Driver";

  constructor(private http: HttpClient) {}

  public getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${environment.apiUrl}${this.url}`);
  }
}
