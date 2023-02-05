import { Subscription } from 'rxjs';
import { UserId } from '../../shared/models/userid.model';
import { CompanyDTO } from './../../shared/dtos/company.dto';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompanyService } from '../../shared/services/company.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'scs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  private companySubscription: Subscription;

  companies: Array<CompanyDTO>;
  loginForm: FormGroup;
  
  constructor(private companyService: CompanyService, private authService: AuthService, private router: Router) { 
        
    localStorage.clear(); //limpia el token y la informacion de usuario

    this.loginForm = new FormGroup({
      'username': new FormControl('manager', [Validators.required]),
      'password': new FormControl('manager', [Validators.required]),
      'company':  new FormControl(null, [Validators.required]),
    });        
  }

  ngOnDestroy(): void {
    this.companySubscription.unsubscribe();
  }

  ngOnInit(): void {
    
    this.companySubscription = this.companyService.getAllCompanies().subscribe({
      next: (response) => {

        this.companies = response.data;        
        if(response.hasValue()){
          this.loginForm.controls["company"].setValue(this.companies[0].id)
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  onSubmit() {
        
    const userID: UserId = this.loginForm.value;

    this.authService.doAuthentication(userID).subscribe({
      next: (response) => {
        localStorage.setItem('userdata', JSON.stringify(response));
        localStorage.setItem('token', response.bearerToken);
        this.router.navigate(['']);
      },
      error: (error) => {
        console.log(error);
      },
    });    
  }

}
