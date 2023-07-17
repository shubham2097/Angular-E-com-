import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sellerSignUp, sellerLogin, sellerAddNewProduct } from 'src/app/data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  private url: string = 'http://localhost:3000';
  public isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  public isLoginSuccess = new EventEmitter<boolean>(true);

  constructor(private http: HttpClient, private route: Router) { }

  sellerSignUp(data: sellerSignUp): any {
    if (data) {
      this.http.post(this.url + '/seller',
        data,
        { observe: 'response' })
        .subscribe((result) => {
          this.isSellerLoggedIn.next(true);
          localStorage.setItem('sellerData', JSON.stringify(result.body));
          this.route.navigate(['seller-home']);
        })
    }
  }

  reloadSeller(): void {
    if (localStorage.getItem('sellerData')) {
      this.isSellerLoggedIn.next(true);
      this.route.navigate(['seller-home']);
    }
  }

  sellerLogin(data: sellerLogin): void {
    if (data) {
      this.http.get(this.url + `/seller?email=${data.email}&password=${data.password}`,
        { observe: 'response' })
        .subscribe((result: any) => {
          if (result && result.body && result.body.length) {
            this.isSellerLoggedIn.next(true);
            localStorage.setItem('sellerData', JSON.stringify(result.body));
            this.route.navigate(['seller-home']);
          } else {
            this.isLoginSuccess.emit(false);
            alert("Login Failed. Enter correct username/password");
          }
        })
    }
  }

  addNewProduct(data: sellerAddNewProduct): any {
    if (data) {
      return this.http.post(this.url + '/seller-add-new-product', data)
    }
  }

  getProducts(): any {
    return this.http.get<sellerAddNewProduct[]>(this.url + '/seller-add-new-product');
  }

  deleteProduct(id: number) {
    return this.http.delete(this.url + '/seller-add-new-product/' + id);
  }

  getProduct(id: string): any {
    return this.http.get<sellerAddNewProduct>(this.url + `/seller-add-new-product/${id}`);
  }

  updateProduct(data: sellerAddNewProduct): any {
    return this.http.put<sellerAddNewProduct>(this.url + `/seller-add-new-product/${data.id}`, data);
  }

  popularProducts() {
    return this.http.get<sellerAddNewProduct[]>(this.url + '/seller-add-new-product?_limit=3');
  }

  trendyProducts(){
    return this.http.get<sellerAddNewProduct[]>(this.url + '/seller-add-new-product?_limit=8');
  }

  searchProducts(query: string){
    return this.http.get<sellerAddNewProduct[]>(this.url + `/seller-add-new-product?q=${query}`);
  }
}