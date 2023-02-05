import { Observable } from 'rxjs';
import { UserId } from './login/user-id';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

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
