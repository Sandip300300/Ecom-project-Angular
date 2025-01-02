import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogIn, Signup } from '../data-type';
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

  userLogin(data: LogIn) {
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, { observe: 'response' }).subscribe((result:any) => {
      if(result && result.body && result.body.length){
        console.log("User logged In");
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['seller-home'])
      }
      else{
        console.log('Login falied')
      }
    });
  }
}
