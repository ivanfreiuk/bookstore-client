import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {

  @Output() selectedCategory = new EventEmitter<number>();
  categories: Category[];
  
  constructor(private categorySvc: CategoryService) {
    this.categorySvc.getAll().subscribe(data => {
      this.categories = data;
    })
  }

  ngOnInit() {
  }

  emitCategory(categoryId: number) {
    this.selectedCategory.emit(categoryId);
  }
}
