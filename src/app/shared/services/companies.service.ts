import { WebApiResponse } from './../WebApiResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyDTO } from '../dtos/company.dto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getAllCompanies(): Observable<WebApiResponse<CompanyDTO>> {
    return this.http.get<any>('https://app.biowest.net/CSC_Cotizador_API/api/Empresa')
    .pipe(
      map(a => {
        return new WebApiResponse<CompanyDTO>(a.data);
      })
    );
  }
  
}
