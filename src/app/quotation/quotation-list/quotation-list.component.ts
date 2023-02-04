import { CotizacionService } from './../services/cotizacion.service';
import { Component, OnInit } from '@angular/core';
import { CotizacionDTO } from '../dto/cotizacion.dto';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
  selector: 'ngx-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.scss']
})
export class QuotationListComponent implements OnInit {

  total = 1;
  listOfRandomUser: CotizacionDTO[] = [];
  loading = true;
  pageSize = 50;
  pageIndex = 1;
  filterGender = [
    { text: 'male', value: 'male' },
    { text: 'female', value: 'female' }
  ];

  constructor(private cotizacionService: CotizacionService) { }

  ngOnInit(): void { 
    //this.loadDataFromServer(this.pageIndex, this.pageSize, null, null, []);
  }

  loadDataFromServer(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filter: Array<{ key: string; value: string[] }>
  ): void {
    this.loading = true;
    this.cotizacionService.getUsers(pageIndex, pageSize, sortField, sortOrder, filter).subscribe(data => {
      this.loading = false;
      this.total = data.data.length;
      this.listOfRandomUser = data.data;
    });
  }

  onQueryParamsChange(params: NzTableQueryParams): void {    
    // const { pageSize, pageIndex, sort, filter } = params;
    // const currentSort = sort.find(item => item.value !== null);
    // const sortField = (currentSort && currentSort.key) || null;
    // const sortOrder = (currentSort && currentSort.value) || null;
    // this.loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter);
  }

}
