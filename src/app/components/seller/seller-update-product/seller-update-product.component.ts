import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { sellerAddNewProduct } from 'src/app/data-type';
import { SellerService } from 'src/app/service/seller/seller.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
  productData: undefined | sellerAddNewProduct;
  productMessage: undefined | string;
  constructor(private route: ActivatedRoute, private sellerService: SellerService, private router:Router) { }

  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get('id');
    productId && this.sellerService.getProduct(productId).subscribe((data: sellerAddNewProduct) => {
      this.productData = data;
    })
  }

  updateSellerProduct(data: sellerAddNewProduct) {
    if(this.productData){
      data.id = this.productData.id;
    }
    this.sellerService.updateProduct(data).subscribe((result: sellerAddNewProduct)=>{
      if(result){
        this.productMessage = "Product has updated";
      }
    });
    setTimeout(()=>{
      this.productMessage='';
      this.router.navigate(['seller-home']);
    },1000)
  }
}
