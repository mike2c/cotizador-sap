import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(req.headers.has('skip'))
      return next.handle(req);

    const token = localStorage.getItem('token');

    const newRequest = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${token}`)
    })    

    return next.handle(newRequest);
  }
}
