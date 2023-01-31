import { Observable, of } from 'rxjs';
import { UserId } from './login/user-id';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  doAuthentication(userId: UserId): Observable<any> {
    
    const credentials = {
      user: userId.username,
      password: userId.password,
      empresaId: userId.company,
    }

    return this.http.post('https://app.biowest.net/CSC_Cotizador_API/api/Token', credentials)
    .pipe(
      map<any, any> (a => {        
        return {
          username: 'mikedosce',
          name: 'Miguel Angel Castillo Cornejo',
          email: 'mikedosce1992@gmail.com',
          profilePicture: 'http://2.bp.blogspot.com/-6HpqWQoVlo0/VG0Lv3FDN2I/AAAAAAAAA0Y/gIcePdRzWx4/s1600/pixel_mariobros.jpg',
          token: a.bearerToken
        };
      })
    )
  }
}
