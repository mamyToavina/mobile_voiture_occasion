import { Injectable } from '@angular/core';
import { AppConstant } from '../AppConstant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  private apiUrl = AppConstant.apiUrl;

  constructor(private http: HttpClient) { }

  createAd(adData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/ads`, adData);
  }

  findAllCategory(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/findAllCategory`);
  }

  findAllBrands(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/findAllBrands`);
  }

}
