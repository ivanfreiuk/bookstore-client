import { Component, OnInit } from '@angular/core';
import { CartItemService, AuthenticationService } from 'src/app/services';
import { CartItem } from 'src/app/models';

@Component({
  selector: 'app-cart-item-tab',
  templateUrl: './cart-item-tab.component.html',
  styleUrls: ['./cart-item-tab.component.css']
})
export class CartItemTabComponent implements OnInit {
  totalSum: number = 0;

  constructor(private authSvc: AuthenticationService,
    private cartSvc: CartItemService) {
  }

  ngOnInit() {
  }

  onValueChange(value: number, item: CartItem) {
    item.quantity = value;

    this.cartSvc.update(item).subscribe();
    this.computeSum();
  }

  deleteItem(itemId: number) {
    this.cartSvc.delete(itemId).subscribe(() => {
      this.cartSvc.getItemsByUserId(this.authSvc.currentUserValue.id).subscribe(data => {
        this.cartSvc.cartItemsValue = data;
        this.computeSum();
      });
    });
  }

  computeSum() {
    this.cartSvc.cartItemsValue.forEach(ci => this.totalSum += ci.quantity * ci.book.price);
  }
}
