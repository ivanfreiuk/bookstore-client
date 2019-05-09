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
import { BookListComponent } from './book-list/book-list.component';
import { BookItemListComponent } from './book-item-list/book-item-list.component';
import { BooksMainPageComponent } from './books-main-page/books-main-page.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { RatingModule } from 'ng-starrating';
import { AddCommentComponent } from './add-comment/add-comment.component';

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
        AddCommentComponent
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
