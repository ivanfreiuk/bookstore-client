import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService, CartItemService } from 'src/app/services';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { WishService } from 'src/app/services/wish.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason: string = '';
  tabTitle: string = '';
  textToSearch: string;


  constructor(private authSvc: AuthenticationService,
    private cartSvc: CartItemService,
    private wishSvc: WishService,
     private router: Router) { }

  ngOnInit() {
  }

  open(tabTitle: string) {
    if(tabTitle==='cartTab') {
      this.cartSvc.getItemsByUserId(this.authSvc.currentUserValue.id).subscribe(data=>{
        this.cartSvc.cartItemsValue = data;
        this.cartSvc.cartItemsValue.forEach(ci => this.cartSvc.totalSum += ci.quantity * ci.book.price);
      });
    } else if(tabTitle ==='wishTab') {
      // TODO
    }
    this.sidenav.open();
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  logout() {
    this.authSvc.logout();
    this.router.navigate(['/login']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  search(value: string) {
    this.router.navigate(['/books'], { queryParams: { title: value } })
  }
}
