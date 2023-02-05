import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CotizacionDTO } from './../dto/cotizacion.dto';
import { WebApiResponse } from './../../shared/WebApiResponse';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {
  
  constructor(private http: HttpClient) { }

  getUsers(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filters: Array<{ key: string; value: string[] }>): Observable<WebApiResponse<CotizacionDTO>> {
    
    let params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('results', `${pageSize}`)
      .append('sortField', `${sortField}`)
      .append('sortOrder', `${sortOrder}`);

    filters.forEach(filter => {
      filter.value.forEach(value => {
        params = params.append(filter.key, value);
      });
    });

    return this.http
      .get<WebApiResponse<CotizacionDTO>>(`${environment.apiUrl}/management-quote/quotes`, { params })
      .pipe(
        catchError(() => of(new WebApiResponse([])))
      );
  }
}
