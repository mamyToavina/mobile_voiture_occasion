import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstant } from '../AppConstant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAdsVenduService {

  private apiUrl = AppConstant.apiUrl;

  constructor(private http: HttpClient) { }

  getAdsByUserIdAndStatus(userId: number, status: number, page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/findAdsByUserIdAndStatus/${userId}/${status}/${page}`);
  }

  markAdAsSold(adId: number) {
    return this.http.put(`${this.apiUrl}/api/markAdAsSold/${adId}`, null);
  }

}
