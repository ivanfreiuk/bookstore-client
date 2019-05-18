import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Category } from 'src/app/models';
import { CategoryService } from 'src/app/services';

@Component({
  selector: 'app-category-chips-autocomplete',
  templateUrl: './category-chips-autocomplete.component.html',
  styleUrls: ['./category-chips-autocomplete.component.css']
})
export class CategoryChipsAutocompleteComponent {

  @Output() emitSelected = new EventEmitter<Category[]>();
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryCtrl = new FormControl();
  filteredCategories: Observable<Category[]>;
  selectedCategories: Category[] = [];
  allCategories: Category[];

  @ViewChild('itemInput') itemInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private categorySvc: CategoryService) {
    this.initCategories();
  }

  add(event: MatChipInputEvent): void {

    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our category
      if ((value || '').trim() && !this.isValueSelected(value.trim())) {
        const category = new Category(value.trim());

        this.categorySvc.post(category).subscribe(data => {
          this.selectedCategories.push(data);
          this.emitSelected.emit(this.selectedCategories);
        });

        this.initCategories();
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.categoryCtrl.setValue(null);
    }
  }

  remove(category: Category): void {
    const index = this.selectedCategories.indexOf(category);

    if (index >= 0) {
      this.selectedCategories.splice(index, 1);
    }

    this.emitSelected.emit(this.selectedCategories);
  }

  selected(event: MatAutocompleteSelectedEvent): void {

    if (this.isValueSelected(event.option.viewValue)) {
      return;
    }

    const category = new Category(event.option.viewValue, event.option.value)

    this.selectedCategories.push(category);
    this.emitSelected.emit(this.selectedCategories);
    this.itemInput.nativeElement.value = '';
    this.categoryCtrl.setValue(null);

  }

  private _filter(value: string): Category[] {
    const filterValue = value.toString().toLowerCase();

    return this.allCategories.filter(category => category.categoryName.toString().toLowerCase().indexOf(filterValue) === 0);
  }

  private isValueSelected(categoryName: string): boolean {
    const name = categoryName.trim().toString().toLowerCase();

    return this.selectedCategories
      .filter(c => c.categoryName.toString().toLowerCase() === name).length > 0;
  }

  private initCategories() {
    this.categorySvc.getAll().subscribe(data => {
      this.allCategories = data;
    })
    this.filteredCategories = this.categoryCtrl.valueChanges.pipe(
      startWith(null),
      map((categoryName: string | null) => categoryName ? this._filter(categoryName) : this.allCategories));
  }
}
