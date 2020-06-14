import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {map} from 'rxjs/operators';
import {Post} from '../_models/post';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(
      private router: Router,
      private http: HttpClient
  ) { }

  register(post: Post) {
    return this.http.post(`${environment.apiUrl}/post/insert`, post);
  }

  getAll() {
    return this.http.get<Post[]>(`${environment.apiUrl}/post`);
  }

  getById(id: string) {
    return this.http.get<Post>(`${environment.apiUrl}/post/${id}`);
  }

  update(id, params) {
    return this.http.put(`${environment.apiUrl}/posts/${id}`, params)
        .pipe(map(x => {
          return x;
        }));
  }

  delete(id: string) {
    return this.http.delete(`${environment.apiUrl}/post/${id}`)
        .pipe(map(x => {
          return x;
        }));
  }
}
