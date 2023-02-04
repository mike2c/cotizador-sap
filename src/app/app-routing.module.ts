import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// import {
//   NbAuthComponent,
//   NbLoginComponent,
//   NbLogoutComponent,
//   NbRegisterComponent,
//   NbRequestPasswordComponent,
//   NbResetPasswordComponent,
// } from '@nebular/auth';
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
      // {
      //   path: '',
      //   redirectTo: '',
      //   pathMatch: 'full'
      // },
      {
        path: '',
        loadChildren: ()  => import('./test/test.module').then(a => a.TestModule),
        canActivate: [AuthWard]
      },
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
export class AppRoutingModule {
}


/* {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' }, */