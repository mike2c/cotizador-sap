import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ThemeModule } from '../template/@theme/theme.module'
import { NbCheckboxModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbIconModule, NbCardModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbLayoutModule,
    NbSidebarModule,
    NbAuthModule,
    NbCheckboxModule,
    NbIconModule,
    NbCardModule,
    NbInputModule,
    NbSelectModule
  ]
})
export class AuthModule { }
