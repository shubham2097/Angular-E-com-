import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { SellerService } from 'src/app/service/seller/seller.service';
import { inject } from '@angular/core';

export const sellerAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const service = inject(SellerService);
  if(localStorage.getItem('sellerData')){
    return true;
  }
  return service.isSellerLoggedIn;
};