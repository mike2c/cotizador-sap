import { AuthService } from './../auth.service';
import { UserId } from './user-id';
import { CompanyDTO } from './../../shared/dtos/company.dto';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompanyService } from '../../shared/services/company.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'scs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    
  companies: Array<CompanyDTO>;
  loginForm: FormGroup;
  
  constructor(private companyService: CompanyService, private authService: AuthService, private router: Router) { 

    this.loginForm = new FormGroup({
      'username': new FormControl('manager', [Validators.required]),
      'password': new FormControl('manager', [Validators.required]),
      'company':  new FormControl(null, [Validators.required]),
    });        
  }

  ngOnDestroy(): void {
  
  }

  ngOnInit(): void {
    
    this.companyService.getAllCompanies().subscribe({
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
        localStorage.setItem('token', response.token);
        this.router.navigate(['']);
      },
      error: (error) => {
        console.log(error);
      },
    });    
  }

}
