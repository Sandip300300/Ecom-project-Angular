import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../service/seller.service';
import { Router } from '@angular/router';
import { Signup } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit {

  constructor(private sellerService: SellerService, private router: Router) { }
  ngOnInit(): void {
    this.sellerService.reloadSeller();
    }

  signUp(data: Signup): void {
    this.sellerService.userSignUp(data);
  }
}
