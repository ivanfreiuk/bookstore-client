import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books-main-page',
  templateUrl: './books-main-page.component.html',
  styleUrls: ['./books-main-page.component.css']
})
export class BooksMainPageComponent implements OnInit {
  books: Book[];
  selectedSortValue: any;

  constructor(private bookSvc: BookService) {
    this.bookSvc.getAll().subscribe(data => {
      this.books = data;
    })
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
        1 : ((b.price > a.price) ? -1 : 0));
    }
    else if (option === "priceDescendant") {
      this.books = this.books.sort((a, b) =>
      (a.price > b.price) ?
        1 : ((b.price > a.price) ? -1 : 0))
        .reverse();
    }
    else if (option === "nameAscendant") {
      this.books = this.books.sort((a, b) =>
        (a.title > b.title) ? 
        1 : ((b.title > a.title) ? -1 : 0));
    }
    else if (option === "nameDescendant") {
      this.books = this.books.sort((a, b) =>
        (a.title > b.title) ?
          1 : ((b.title > a.title) ? -1 : 0))
          .reverse();
    }
  }
}
