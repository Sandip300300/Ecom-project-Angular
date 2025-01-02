import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../service/seller.service';
import { Router } from '@angular/router';
import { LogIn, Signup } from '../data-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule,CommonModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;

  constructor(private sellerService: SellerService, private router: Router) { }
  ngOnInit(): void {
    this.sellerService.reloadSeller();
    }

  signUp(data: Signup): void {
    this.sellerService.userSignUp(data);
  }

  openLogin() {
    this.showLogin = !this.showLogin ;
  }

  logIn(data: LogIn){
    this.sellerService.userLogin(data);
  }
}
