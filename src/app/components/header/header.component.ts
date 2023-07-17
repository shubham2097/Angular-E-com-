import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  sellerName: string = '';
  userIcon = faUser;
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('sellerData') && val.url.includes('seller')) {
          this.menuType = 'seller';
          let sellerDetails = localStorage.getItem('sellerData');
          let sellerData = sellerDetails && JSON.parse(sellerDetails);
          this.sellerName = sellerData[0].name;
        } else {
          this.menuType = 'default';
        }
      }
    })
  }

  logOut(){
    if(localStorage.getItem('sellerData')){
      localStorage.removeItem('sellerData');
      this.menuType='default';
      this.route.navigate(['/']);
    }
  }
}
