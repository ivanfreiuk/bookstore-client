import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
  }

  getById(id: number) {
    return this.http.get(`${this.apiUrl}/books/` + id);
  }

  post(book: Book) {
    return this.http.post(`${this.apiUrl}/books`, book);
  }

  update(book: Book) {
    return this.http.put(`${this.apiUrl}/books/` + book.id, book);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/books/` + id);
  }
}
