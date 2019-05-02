import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
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
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { StorebarComponent } from './storebar/storebar.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
    declarations: [
        NavbarComponent,
        LoginComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        RegisterComponent,
        MatRegisterComponent,
        MatLoginComponent,
        BookDetailComponent,
        BsNavbarComponent,
        StorebarComponent,
        MainContentComponent
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
        FormsModule
    ],
    exports: [
        NavbarComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        MatLoginComponent,
        MatRegisterComponent,
        BsNavbarComponent,
        BookDetailComponent,
        StorebarComponent,
        MainContentComponent
    ]
})
export class ComponentsModule { }
