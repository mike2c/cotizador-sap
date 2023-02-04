import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { QuotationListComponent } from './quotation-list/quotation-list.component';

const routes: Routes = [
  {
    path: '',
    component: QuotationListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotationRoutingModule { }
