import { Component, OnInit } from '@angular/core';
import { CartItemService, AuthenticationService } from 'src/app/services';
import { CartItem } from 'src/app/models';

@Component({
  selector: 'app-cart-item-tab',
  templateUrl: './cart-item-tab.component.html',
  styleUrls: ['./cart-item-tab.component.css']
})
export class CartItemTabComponent implements OnInit {

  constructor(private authSvc: AuthenticationService, private cartSvc: CartItemService) {
      
   }

  ngOnInit() {
  }

}
