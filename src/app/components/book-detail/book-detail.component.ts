import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';
import { CartItem } from 'src/app/models';
import { AuthenticationService, CartItemService } from 'src/app/services';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  currentBook: Book;
  bookId: number;
  bookComments: Comment[];
  cartItem: CartItem;

  constructor(private bookSvc: BookService,
    private authSvc: AuthenticationService,
    private cartSvc: CartItemService,
    private commentSvc: CommentService,
    private router: Router,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.bookId = params['id'];
    });

    this.commentSvc.getCommentsByBookId(this.bookId).subscribe(data => {
      this.bookComments = data;
    });
  }

  ngOnInit() {
    this.bookSvc.getById(this.bookId).subscribe(
      data => {
        this.currentBook = data;
      },
      error => {
        if (error.status == 401) {
          // TODO
          this.bookComments.length
        }
      });
  }

  onQuantityChanged(value: number) {
    this.cartItem.quantity = value;
  }

  onCommentsChanged() {
    this.commentSvc.getCommentsByBookId(this.bookId).subscribe(data => {
      this.bookComments = data;
    });
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
