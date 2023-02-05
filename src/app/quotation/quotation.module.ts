import { NbLayoutModule, NbCardModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationListComponent } from './quotation-list/quotation-list.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { QuotationRoutingModule } from './quotation-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    QuotationListComponent,    
  ],
  imports: [
    CommonModule,
    NzTableModule,
    QuotationRoutingModule,
    NbLayoutModule,
    NzButtonModule,
    NzIconModule,
    NbCardModule    
  ]
})
export class QuotationModule { }
