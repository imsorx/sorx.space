import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url = environment.blogIndexURL;

  constructor(private http: HttpClient) { }

  public get posts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

}
