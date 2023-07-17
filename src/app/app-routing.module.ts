import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SellerAuthComponent } from './components/seller/seller-auth/seller-auth.component';
import { EcomPageNotFoundComponent } from './components/ecom-page-not-found/ecom-page-not-found.component';
import { SellerHomePageComponent } from './components/seller/seller-home/seller-home.component';
import { sellerAuthGuard } from './auth/seller/seller-auth.guard';
import { SellerAddProductComponent } from './components/seller/seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './components/seller/seller-update-product/seller-update-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'seller-auth', component: SellerAuthComponent },
  {
    path: 'seller-home', component: SellerHomePageComponent,
    canActivate: [sellerAuthGuard]
  },
  {
    path: 'seller-add-product', component: SellerAddProductComponent,
    canActivate: [sellerAuthGuard]
  },
  {
    path: 'seller-update-product/:id', component: SellerUpdateProductComponent,
    canActivate: [sellerAuthGuard]
  },
  {
    path: '**', component: EcomPageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
