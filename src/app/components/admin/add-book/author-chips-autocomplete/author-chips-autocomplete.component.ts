import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {  Author } from 'src/app/models';
import { AuthorService } from 'src/app/services';

@Component({
  selector: 'app-author-chips-autocomplete',
  templateUrl: './author-chips-autocomplete.component.html',
  styleUrls: ['./author-chips-autocomplete.component.css']
})
export class AuthorChipsAutocompleteComponent {
  
  @Output() emitSelected = new EventEmitter<Author[]>();
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  authorCtrl = new FormControl();
  filteredAuthors: Observable<Author[]>;
  selectedAuthors: Author[] = [];
  allAuthors: Author[];

  @ViewChild('itemInput') itemInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private authorSvc: AuthorService ) {
    this.initCategories();
  }

  add(event: MatChipInputEvent): void {

    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our author
      if ((value || '').trim() && !this.isValueSelected(value.trim())) {
        const author = new Author(value.trim());
        
        this.authorSvc.post(author).subscribe(data => {
          this.selectedAuthors.push(data);          
        });

        this.emitSelected.emit(this.selectedAuthors);
        this.initCategories();
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.authorCtrl.setValue(null);
    }
  }

  remove(author: Author): void {
    const index = this.selectedAuthors.indexOf(author);

    if (index >= 0) {
      this.selectedAuthors.splice(index, 1);
    }

    this.emitSelected.emit(this.selectedAuthors);
  }

  selected(event: MatAutocompleteSelectedEvent): void {

    if (this.isValueSelected(event.option.viewValue)) {
      return;
    }

    const author = new Author(event.option.viewValue, event.option.value)

    this.selectedAuthors.push(author);
    this.emitSelected.emit(this.selectedAuthors);
    this.itemInput.nativeElement.value = '';
    this.authorCtrl.setValue(null);

  }

  private _filter(value: string): Author[] {
    const filterValue = value.toString().toLowerCase();

    return this.allAuthors.filter(author => author.authorName.toString().toLowerCase().indexOf(filterValue) === 0);
  }

  private isValueSelected(authorName: string): boolean {
    const name = authorName.trim().toString().toLowerCase();

    return this.selectedAuthors
      .filter(a => a.authorName.toString().toLowerCase() === name).length > 0;
  }

  private initCategories() {
    this.authorSvc.getAll().subscribe(data => {
      this.allAuthors = data;
    })
    this.filteredAuthors = this.authorCtrl.valueChanges.pipe(
      startWith(null),
      map((authorName: string | null) => authorName ? this._filter(authorName) : this.allAuthors));
  }
}
