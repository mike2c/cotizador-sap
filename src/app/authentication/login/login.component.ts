import { Component, OnInit } from '@angular/core';
import { hasUncaughtExceptionCaptureCallback } from 'process';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    throw new Error('method not implemented');
  }

}
