import { NbLayoutModule, NbCardModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationListComponent } from './quotation-list/quotation-list.component';
import { QuotationRoutingModule } from './quotation-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    QuotationListComponent,    
  ],
  imports: [
    CommonModule,
    QuotationRoutingModule,
    TableModule,
    NbLayoutModule,
    NzButtonModule,
    NzIconModule,
    NbCardModule    
  ]
})
export class QuotationModule { }
