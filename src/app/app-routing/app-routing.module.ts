import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components';
import { AuthGuard } from '../guards';
import { MatLoginComponent } from '../components/mat-login/mat-login.component';
import { MatRegisterComponent } from '../components/mat-register/mat-register.component';
import { BookDetailComponent } from '../components/book-detail/book-detail.component';
import { BooksMainPageComponent } from '../components/books-main-page/books-main-page.component';
import { AddBookComponent } from '../components/admin/add-book/add-book.component';
import { AdminPanelComponent } from '../components/admin/admin-panel/admin-panel.component';
import { AdminBookListComponent } from '../components/admin/admin-book-list/admin-book-list.component';
import { EditBookComponent } from '../components/admin/edit-book/edit-book.component';
import { BookResolver } from '../resolvers/book.resolver';
import { BookListComponent } from '../components/books-main-page/book-list/book-list.component';

const routes: Routes = [
  {
    path: '',
    component: BooksMainPageComponent,
    canActivate: [AuthGuard]
    
  },
  {
    path: 'home',
    component: BooksMainPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detail/:id',
    component: BookDetailComponent
  },
  {
    path: 'books',
    component: BooksMainPageComponent,
    resolve: { books: BookResolver} 
  },
  {
    path: 'add-book',
    component: AddBookComponent,
    canActivate: [AuthGuard],
    data: {
      roles:["User"]}
  },

  {
    path: 'login',
    component: MatLoginComponent
  },
  {
    path: 'register',
    component: MatRegisterComponent
  },
  {
    path: 'admin',
    component: AdminPanelComponent,
    children: [
      {
        path: 'add-book',
        component: AddBookComponent
      },
      {
        path: 'edit-book',
        component: EditBookComponent
      },
      {
        path: 'book-list',
        component: BooksMainPageComponent
      },

    ]
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    BookResolver
  ]
})
export class AppRoutingModule { }
