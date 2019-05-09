import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/comments`);
  }

  getById(id: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.apiUrl}/comments/` + id);
  }

  post(comment: Comment) {
    return this.http.post(`${this.apiUrl}/comments`, comment);
  }

  update(comment: Comment) {
    return this.http.put(`${this.apiUrl}/comments/` + comment.id, comment);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/comments/` + id);
  }

  getCommentsByBookId(bookId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/comments/book/` + bookId)
  }
}
