import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';
import { CartItemService, AuthenticationService } from 'src/app/services';
import { CartItem } from 'src/app/models';

@Component({
  selector: 'app-book-item-list',
  templateUrl: './book-item-list.component.html',
  styleUrls: ['./book-item-list.component.css']
})
export class BookItemListComponent implements OnInit {

  @Input() book: Book;

  constructor(private cartSvc: CartItemService, private authSvc: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  showDetail(bookId: number) {
    this.router.navigate([`/detail/${bookId}`]);
  }

  addToCart(bookId: number) {
    this.cartSvc.getAll().subscribe(data => {
      let cartItems: CartItem[] = data;
      let cartItem: CartItem = cartItems.filter(i => i.bookId === bookId)[0];
      if (cartItem) {
        cartItem.quantity++;
        this.cartSvc.update(cartItem).subscribe();
      } else {
        cartItem = this.createCartItem(bookId);
        this.cartSvc.post(cartItem).subscribe();
      }
    })
  }

  private createCartItem(bookId: number): CartItem {
    const cartItem = new CartItem();
    cartItem.bookId = bookId;
    cartItem.userId = this.authSvc.currentUserValue.id;
    cartItem.isOrdered = false;
    cartItem.createdDate = new Date(Date.now());
    cartItem.quantity = 1;
    return cartItem;
  }

}


// let cartItem: CartItem = this.cartSvc.cartItemsValue ? this.cartSvc.cartItemsValue.filter(i => i.bookId === bookId)[0] : null;

//     if (cartItem) {
//       cartItem.quantity++;
//       this.cartSvc.update(cartItem).subscribe(
//         data=> {

//         },
//         errors=>{
//         }
//       );
//     } else {
//       cartItem = this.createCartItem(bookId);
//       this.cartSvc.post(cartItem).subscribe();
//     }

//     this.cartSvc.getItemsByUserId(cartItem.userId).subscribe(data => {
//       this.cartSvc.cartItemsValue = data;
//     });