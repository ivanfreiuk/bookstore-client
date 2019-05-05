import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  currentBook: Book;
  bookId: number;
  constructor(private bookSvc: BookService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.bookId = params['id'];
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
        }
      })
  }

}
