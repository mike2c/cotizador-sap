import { CotizacionService } from './../services/cotizacion.service';
import { Component, OnInit } from '@angular/core';
import { CotizacionDTO } from '../dto/cotizacion.dto';
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { QUOTATION_COLUMNS } from './column-list';
@Component({
  selector: 'ngx-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.scss']
})
export class QuotationListComponent implements OnInit {

  columns = QUOTATION_COLUMNS;
  
  pageIndex = 1;  
  pageSize = 10;  
  totalRecords: number = 50;
  quotations: CotizacionDTO[] = [];
  loading = false;

  
  constructor(private cotizacionService: CotizacionService) { }

  ngOnInit(): void { 
    this.loadDataFromServer(this.pageIndex, this.pageSize, null, null, []);    
  }

  loadDataFromServer(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filters: Array<{ key: string; value: any }>): void { //string[]

      this.pageSize = pageSize;
      this.pageIndex = pageIndex;
      this.loading = true;

      this.cotizacionService.getQuotations(pageIndex, pageSize, sortField, sortOrder, filters).subscribe(response => {
                
        this.quotations = response.data;   
        this.loading = false;
        this.totalRecords = response.totalRecords;         
      });
  }

  onLazyLoad(event: LazyLoadEvent): void {    

    const { first, rows = 10, sortField } = event;
    const sortOrder = event.sortOrder == 1 ? 'asc' : 'desc';    
    const pageIndex = (first / rows) + 1;
    
    let filters: Array<{ key: string, value: any }> = this.columns.filter(a => a.filter).map(a => {
      
      return {
        key: a.name,
        value: event.filters[a.name][0].value
      };

    }).filter(a => a.value !== null && a.value !== undefined);
       
    this.loadDataFromServer(pageIndex, rows, sortField, sortOrder, filters);
  }

}
