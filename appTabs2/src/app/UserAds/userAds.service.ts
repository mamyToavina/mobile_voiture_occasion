import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstant } from '../AppConstant';

@Injectable({
  providedIn: 'root'
})
export class UserAdsService {

  private apiUrl = AppConstant.apiUrl;

  constructor(private http: HttpClient) { }

  getAdsByUserIdAndStatus(userId: number, status: number, page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/findAdsByUserIdAndStatus/${userId}/${status}/${page}`);
  }

}
