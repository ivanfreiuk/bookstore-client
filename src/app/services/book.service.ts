import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = `${environment.apiUrl}/api`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
  }

  getById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/books/` + id);
  }

  searchByTitle(title: string) {
    return this.http.get<Book[]>(`${this.apiUrl}/books/search/${title}`);
  }

  post(book: Book, imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', imageFile, imageFile.name);
    formData.append('jsonBook', JSON.stringify(book));

    return this.http.post(`${this.apiUrl}/books`, formData);
  }

  update(book: Book) {
    return this.http.put(`${this.apiUrl}/books/` + book.id, book);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/books/` + id);
  }

  getBooksByCategoryId(id: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books/category/` + id);
  }
}
