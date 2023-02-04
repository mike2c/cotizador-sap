import { AuthWardService } from './shared/auth/auth-ward.service';
import { NbActionsModule, NbContextMenuModule, NbIconModule, NbSelectModule, NbUserModule } from '@nebular/theme';
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbLayoutModule  
} from '@nebular/theme';
import { AuthModule } from './auth/auth.module';
import { LayoutComponent } from './shared/layout/layout.component';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

/** config ng-zorro-antd i18n **/
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    AuthModule,
    NbLayoutModule,
    NbIconModule,
    NbSelectModule,
    NbActionsModule,
    NbUserModule,
    NbContextMenuModule,    
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter,
        allowedDomains: [environment.apiUrl],
        disallowedRoutes: [`${environment.apiUrl}/token`],
      },
    }),

  ],
  bootstrap: [AppComponent],
  providers: [
    AuthWardService,
    { provide: NZ_I18N, useValue: en_US }
  ]
})
export class AppModule { }

export function jwtTokenGetter() { return localStorage.getItem('token') }

