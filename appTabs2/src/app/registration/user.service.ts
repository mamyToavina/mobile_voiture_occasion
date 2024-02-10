import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstant } from '../AppConstant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = AppConstant.apiUrl;

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.apiUrl}/test/register`, user, { headers });
  }

}
