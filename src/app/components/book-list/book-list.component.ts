import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() listBooks: Book[]
  constructor(private bookSvc: BookService) {
    // this.bookSvc.getAll().subscribe(data => {
    //   this.listBooks = data;
    // })
  }

  ngOnInit() {
  }

}
