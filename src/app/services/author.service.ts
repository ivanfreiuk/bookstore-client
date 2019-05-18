import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Author } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = `${environment.apiUrl}/api`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Author[]>{
    return this.http.get<Author[]>(`${this.apiUrl}/authors`);
  }

  getById(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.apiUrl}/authors/` + id);
  }

  post(author: Author): Observable<Author> {
    return this.http.post<Author>(`${this.apiUrl}/authors`, author);
  }

  update(author: Author) {
    return this.http.put(`${this.apiUrl}/authors/` + author.id, author);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/authors/` + id);
  }
}
