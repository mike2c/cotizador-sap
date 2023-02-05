import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UserId } from '../models/userid.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  doAuthentication(userId: UserId): Observable<any> {
    
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('skip', 'true');

    const credentials = {
      user: userId.username,
      password: userId.password,
      empresaId: userId.company,
    } 

    return this.http.post(`${environment.apiUrl}/management-auth/token`, credentials, { headers: headers });
  }
}
