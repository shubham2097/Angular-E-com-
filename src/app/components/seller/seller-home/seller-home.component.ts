import { Component } from '@angular/core';
import { sellerAddNewProduct } from 'src/app/data-type';
import { SellerService } from 'src/app/service/seller/seller.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomePageComponent {
  productList: undefined | sellerAddNewProduct[];
  productMessage: undefined | string = '';
  deleteIcon = faTrash;
  updateIcon = faEdit;
  constructor(private sellerService: SellerService) { }
  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.sellerService.getProducts().subscribe((result: sellerAddNewProduct[]) => {
      this.productList = result;
    });
  }

  sellerDeleteProduct(id: number) {
    this.sellerService.deleteProduct(id).subscribe((result: any) => {
      if (result) {
        this.productMessage = 'Product deleted Successfully';
        this.getProducts();
      }
    });
    setTimeout(() => {
      this.productMessage = '';
    }, 3000)
  }
}
