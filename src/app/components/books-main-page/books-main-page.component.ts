import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services';

@Component({
  selector: 'app-books-main-page',
  templateUrl: './books-main-page.component.html',
  styleUrls: ['./books-main-page.component.css']
})
export class BooksMainPageComponent implements OnInit {
  books: Book[];
  bookPerPage: number;

  constructor(private route: ActivatedRoute, private bookSvc: BookService, private authSvc: AuthenticationService) {
    let title = null;
    this.route.queryParams.subscribe(params => {
      title = params['title'];
    });
    if (title) {
      this.bookSvc.searchByTitle(title).subscribe(data => {
        this.books = data;
      });
    } else {
      this.bookSvc.getAll().subscribe(data => {
        this.books = data;
      });
    }
  }

  ngOnInit() {
  }

  onCategorySelected(categoryId: number) {
    this.bookSvc.getBooksByCategoryId(categoryId).subscribe(data => {
      this.books = data;
    })
  }

  changeSortOption(option: string) {

    if (option === "priceAscendant") {
      this.books = this.books.sort((a, b) =>
        (a.price > b.price) ?
          1 : ((b.price > a.price) ? -1 : 0)).slice();;
    }
    else if (option === "priceDescendant") {
      this.books = this.books.sort((a, b) =>
        (a.price > b.price) ?
          1 : ((b.price > a.price) ? -1 : 0))
        .reverse().slice();;
    }
    else if (option === "nameAscendant") {
      this.books = this.books.sort((a, b) =>
        (a.title > b.title) ?
          1 : ((b.title > a.title) ? -1 : 0)).slice();;
    }
    else if (option === "nameDescendant") {
      this.books = this.books.sort((a, b) =>
        (a.title > b.title) ?
          1 : ((b.title > a.title) ? -1 : 0))
        .reverse().slice();
    }
  }

  changeSizePage(value: number) {
    this.bookPerPage = value;
  }
}
