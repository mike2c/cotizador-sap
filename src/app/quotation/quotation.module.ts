import { NbLayoutModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationListComponent } from './quotation-list/quotation-list.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { QuotationRoutingModule } from './quotation-routing.module';


@NgModule({
  declarations: [
    QuotationListComponent,    
  ],
  imports: [
    CommonModule,
    NzTableModule,
    QuotationRoutingModule,
    NbLayoutModule
  ]
})
export class QuotationModule { }
