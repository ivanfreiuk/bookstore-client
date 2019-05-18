import { Injectable } from '@angular/core';

import { Resolve, RouterStateSnapshot } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';
import { BookService } from '../services';
import { Book } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class BookResolver implements Resolve<Book[]> {
  constructor(private bookSvc: BookService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book[]> {
    return this.bookSvc.getAll();
  }
}