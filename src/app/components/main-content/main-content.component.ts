import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  textToSearch: string;

  constructor(private authSvc: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authSvc.logout();
    this.router.navigate(['/login']);
  }

}
