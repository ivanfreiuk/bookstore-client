import { Component, OnInit } from '@angular/core';
import { Wish } from 'src/app/models';
import { AuthenticationService } from 'src/app/services';
import { WishService } from 'src/app/services/wish.service';

@Component({
  selector: 'app-wish-list-tab',
  templateUrl: './wish-list-tab.component.html',
  styleUrls: ['./wish-list-tab.component.css']
})
export class WishListTabComponent implements OnInit {

  constructor(private authSvc: AuthenticationService,
    private wishSvc: WishService) {

  }

  ngOnInit() {
  }

  onValueChange(value: number, wish: Wish) {
    wish.quantity = value;

    this.wishSvc.update(wish).subscribe();
  }

  deleteWish(itemId: number) {
    this.wishSvc.delete(itemId).subscribe(() => {
      this.wishSvc.getWishesByUserId(this.authSvc.currentUserValue.id).subscribe(data => {
        this.wishSvc.wishListValue = data;
      });
    });
  }
}
