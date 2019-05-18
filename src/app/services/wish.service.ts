import { Injectable } from '@angular/core';
import { Wish } from '../models';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  private apiUrl = `${environment.apiUrl}/api`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Wish[]>{
    return this.http.get<Wish[]>(`${this.apiUrl}/wishes`);
  }

  getWishesByUserId(userId: number): Observable<Wish[]> {
    return this.http.get<Wish[]>(`${this.apiUrl}/wishes/user/${userId}`);
  }

  post(wish: Wish): Observable<Wish> {
    return this.http.post<Wish>(`${this.apiUrl}/wishes`, wish);
  }

  update(category: Wish) {
    return this.http.put(`${this.apiUrl}/wishes/`, category);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/wishes/` + id);
  }
}
