import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CotizacionDTO } from './../dto/cotizacion.dto';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { PaginatedResponse } from '../../shared/paginated-response';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {
  
  constructor(private http: HttpClient) { }

  getQuotations(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filters: Array<{ key: string; value: any }>): Observable<PaginatedResponse<CotizacionDTO>> { // string[]

    let params = new HttpParams()
      .append('pageIndex', `${pageIndex}`)
      .append('pageSize', `${pageSize}`)
      .append('sortField', `${sortField}`)
      .append('sortOrder', `${sortOrder}`);

    filters.forEach(filter => {
      params = params.append(filter.key, filter.value);
      // cuando el filtro tiene muchos valores
      // filter.value.forEach(value => { });
    });

    return this.http
      .get<PaginatedResponse<CotizacionDTO>>(`${environment.apiUrl}/management-quote/quotes`, { params })
      .pipe(catchError(() => of(new PaginatedResponse<CotizacionDTO>())))
  }
}
