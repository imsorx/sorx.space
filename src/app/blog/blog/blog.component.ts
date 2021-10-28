import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts?: Post[];
  isEmpty: boolean = false;
  isFailed: boolean = false;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.posts.subscribe((data: Post[]) => {
      this.posts = data;
    }, err => this.isFailed = true);
  }

}
