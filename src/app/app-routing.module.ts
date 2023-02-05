import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthWardService as AuthWard } from './shared/auth/auth-ward.service';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule)
  },
  {
    path: '',    
    component: LayoutComponent,
    children:[
      {
        path: 'cotizacion',
        loadChildren: ()  => import('./quotation/quotation.module').then(a => a.QuotationModule),
        canActivate: [AuthWard]
      }
    ]
  },
];

const config: ExtraOptions = {
  useHash: false,
};
@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
