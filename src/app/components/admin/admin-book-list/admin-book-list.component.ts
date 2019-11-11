import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSnackBar } from '@angular/material';
import { Book } from 'src/app/models';
import { BookService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-book-list',
  templateUrl: './admin-book-list.component.html',
  styleUrls: ['./admin-book-list.component.css']
})
export class AdminBookListComponent implements OnInit, OnChanges {
  displayedColumns: string[] = [
    'id',
    'title',
    'price',
    'pageSize',
    'language',
    'mark',
    'deleteOption',
    'detailOption',
  'commentingOption'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Book>;
  @Input() listBooks: Book[];
  @Input() pageSize: number;

  constructor(private bookSvc: BookService, 
    private snackBar: MatSnackBar,
    private router: Router) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Book>(this.listBooks);
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges() {
    if (this.dataSource) {
      this.dataSource.data = this.listBooks;
    }
  }

  remove(book: Book) {
    this.bookSvc.delete(book.id).subscribe(() => {
      this.snackBar.open(`Book "${book.title}" was successfully deleted.`, 'Close', {
        duration: 3000,
      });

      this.dataSource.data = this.dataSource.data.filter(b => b.id != book.id);
    });
  }

  openDetail(id: number) {
    this.router.navigate([`/detail/${id}`]);
  }

  toggleCommenting(value: boolean, book: Book) {
    book.commentsEnabled = value;
    console.log(book.commentsEnabled);
     this.bookSvc.update(book).subscribe();
  }
}

