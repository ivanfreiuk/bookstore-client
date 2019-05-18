import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category, Book, Author } from 'src/app/models';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookForm: FormGroup;
  imageFile: File;
  authors: Author[];
  categories: Category[];

  constructor(private bookSvc: BookService,
     private router: Router,
     private fb: FormBuilder,
     private snackBar: MatSnackBar) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0), Validators.max(1000000), Validators.pattern("^[0-9]+(.[0-9]{0,2})?$")]],
      language: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      pageSize: ['', [Validators.required, Validators.min(0), Validators.max(5000), Validators.pattern("^[0-9]+(.[0-9]{0,2})?$")]]
    })
  }

  ngOnInit() {
  }

  // convenience getter for easy access to form fields
  get controls() { return this.bookForm.controls; }

  onCategorySelected(categories: Category[]) {
    this.categories = categories;
  }

  onAuthorSelected(authors: Author[]) {
    this.authors = authors;
  }

  onUploadFile(files: File[]) {
    if (files.length === 0) {
      return;
    }

    this.imageFile = <File>files[0];
  }

  onSubmit() {
    if (this.bookForm.valid && this.imageFile && this.categories && this.authors) {
      var book = this.bookForm.value;
      book.categories = this.categories;
      book.authors = this.authors;

      this.bookSvc.post(book, this.imageFile).subscribe(data => {
        this.router.navigate([`/detail/${data.id}`])

        this.snackBar.open(`Book "${book.title}" was successfully added.`, 'Close', {
          duration: 3000,
        });
      });
    }
  }
}
