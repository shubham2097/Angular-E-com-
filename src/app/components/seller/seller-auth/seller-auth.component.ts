import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../../service/seller/seller.service';
import { Router } from '@angular/router';
import { sellerSignUp, sellerLogin } from '../../../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  public showLoginFlag:boolean = false;
  public authError: string = '';
  constructor(private sellerService: SellerService, private route: Router) { }

  ngOnInit(): void {
    this.sellerService.reloadSeller();
  }

  public signUp(data: sellerSignUp): void {
    this.sellerService.sellerSignUp(data).subscribe((res: any) => {
      if (res) {
        this.route.navigate(['seller-home']);
      }
    });
  }

  public showLogin(flag:boolean){
    this.showLoginFlag = flag;
    this.authError = '';
    this.sellerService.isLoginSuccess.subscribe((success)=>{
      if(!success){
        this.authError = 'Username/Password is incorrect';
      }
    })
  }

  public login(data: sellerLogin): void {
    this.sellerService.sellerLogin(data);
  }
}
