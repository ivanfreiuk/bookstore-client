import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-item-list',
  templateUrl: './book-item-list.component.html',
  styleUrls: ['./book-item-list.component.css']
})
export class BookItemListComponent implements OnInit {

  @Input() book: Book;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showDetail(bookId: number) {
    this.router.navigate([`/detail/${bookId}`]);
  }

}
