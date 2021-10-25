import { Component, OnInit } from '@angular/core';
import { SlideInLeft } from 'src/app/animations';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [SlideInLeft]
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
