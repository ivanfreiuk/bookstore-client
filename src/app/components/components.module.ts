import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatRegisterComponent } from './mat-register/mat-register.component';
import { MatLoginComponent } from './mat-login/mat-login.component';
import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
} from '@angular/material';
import { BookDetailComponent, MainContentComponent, CounterComponent } from '.';
import { BookListComponent } from './books-main-page/book-list/book-list.component';
import { BookItemListComponent } from './books-main-page/book-list/book-item-list/book-item-list.component'
import { BooksMainPageComponent } from './books-main-page/books-main-page.component';
import { CategoryCardComponent } from './books-main-page/category-card/category-card.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { RatingModule } from 'ng-starrating';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { AddBookComponent } from './admin/add-book/add-book.component';
import { ChipsAutocompleteComponent } from './admin/add-book/chips-autocomplete/chips-autocomplete.component';
import { CategoryChipsAutocompleteComponent } from './admin/add-book/category-chips-autocomplete/category-chips-autocomplete.component';
import { AuthorChipsAutocompleteComponent } from './admin/add-book/author-chips-autocomplete/author-chips-autocomplete.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminBookListComponent } from './admin/admin-book-list/admin-book-list.component';
import { EditBookComponent } from './admin/edit-book/edit-book.component';
import { SidebarComponent } from './main-content/sidebar/sidebar.component';
import { WishListTabComponent } from './main-content/sidebar/wish-list-tab/wish-list-tab.component';
import { CartItemTabComponent } from './main-content/sidebar/cart-item-tab/cart-item-tab.component';

@NgModule({
    declarations: [
        NavbarComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        MatRegisterComponent,
        MatLoginComponent,
        BookDetailComponent,
        MainContentComponent,
        CounterComponent,
        BookListComponent,
        BookItemListComponent,
        BooksMainPageComponent,
        CategoryCardComponent,
        CommentListComponent,
        AddCommentComponent,
        AddBookComponent,
        ChipsAutocompleteComponent,
        CategoryChipsAutocompleteComponent,
        AuthorChipsAutocompleteComponent,
        AdminPanelComponent,
        AdminBookListComponent,
        EditBookComponent,
        SidebarComponent,
        WishListTabComponent,
        CartItemTabComponent
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        FormsModule,
        RatingModule 
    ],
    exports: [
        NavbarComponent,
        HeaderComponent,
        FooterComponent,
        MatLoginComponent,
        MatRegisterComponent,
        BookDetailComponent,
        MainContentComponent,
        CounterComponent
    ]
})
export class ComponentsModule { }
