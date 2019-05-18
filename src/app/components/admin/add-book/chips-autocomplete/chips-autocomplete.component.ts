import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-chips-autocomplete',
  templateUrl: './chips-autocomplete.component.html',
  styleUrls: ['./chips-autocomplete.component.css'],
})
export class ChipsAutocompleteComponent {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryCtrl = new FormControl();
  filteredItems: Observable<any[]>;
  @Output() selectedItems: any[];
  @Output() addedItems: any[];
  @Input() allItems: any[];

  @ViewChild('itemInput') itemInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.initCategories();
  }

  add(event: MatChipInputEvent): void {

    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our category
      if ((value || '').trim() && !this.isValueSelected(value.trim())) {
        const category =  (value.trim());

        // this.categorySvc.post(category).subscribe(result => {
        //   this.selectedCategories.push(result);
        // });

        this.initCategories();
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.categoryCtrl.setValue(null);
    }
  }

  remove(category: any): void {
    const index = this.selectedItems.indexOf(category);

    if (index >= 0) {
      this.selectedItems.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {

    if (this.isValueSelected(event.option.viewValue)) {
      return;
    }

    const category = new (event.option.viewValue, event.option.value)

    this.selectedItems.push(category);
    this.itemInput.nativeElement.value = '';
    this.categoryCtrl.setValue(null);

  }

  private _filter(value: string): any[] {
    const filterValue = value.toString().toLowerCase();

    return this.allItems.filter(category => category.categoryName.toString().toLowerCase().indexOf(filterValue) === 0);
  }

  private isValueSelected(categoryName: string): boolean {
    const name = categoryName.trim().toString().toLowerCase();

    return this.selectedItems
      .filter(c => c.categoryName.toString().toLowerCase() === name).length > 0;
  }

  private initCategories() {
    
    this.filteredItems = this.categoryCtrl.valueChanges.pipe(
      startWith(null),
      map((itemName: string | null) => itemName ? this._filter(itemName) : this.allItems));
  }
}
