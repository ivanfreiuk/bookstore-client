import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authSvc: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authSvc.logout();
    this.router.navigate(['/login']);
  }
}
