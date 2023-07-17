import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { sellerAddNewProduct } from 'src/app/data-type';
import { SellerService } from 'src/app/service/seller/seller.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  public message: string = ''

  constructor(private sellerService: SellerService, private route: Router) { }

  addSellerProduct(data: sellerAddNewProduct) {
    this.sellerService.addNewProduct(data).subscribe((res: any) => {
      console.log(res);
      if (res) {
        this.message = 'Product added Successfully';
        alert('Product added Successfully');
        this.route.navigate(['seller-home']);
      } else {
        this.message = 'Product added Successfully';
        alert('Failed to add product');
      }
    });
  }
}
