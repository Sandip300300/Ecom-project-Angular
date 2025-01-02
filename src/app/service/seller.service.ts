import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signup } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }

  userSignUp(data: Signup) {
    return this.http.post('http://localhost:3000/seller', data, { observe: 'response' }).subscribe((resut) => {
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(resut.body))
      this.router.navigate(['seller-home']);
    });
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
}
