import { Component } from '@angular/core';
import { sellerAddNewProduct } from 'src/app/data-type';
import { SellerService } from 'src/app/service/seller/seller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  popularProducts: undefined | sellerAddNewProduct[];
  trendyProducts: undefined | sellerAddNewProduct[];

  constructor(private sellerService: SellerService) { }

  ngOnInit() {
    this.sellerService.popularProducts()
      .subscribe((data) => {
        console.log(data);
        this.popularProducts = data;
      });

    this.sellerService.trendyProducts()
    .subscribe((data) => {
      console.log(data);
      this.trendyProducts = data;
    });
  }
}
