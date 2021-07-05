import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    data: { title: 'Blog' }
  },
  {
    path: ':file',
    component: PostComponent,
    data: { title: 'Blog' }
  }
];

@NgModule({
  declarations: [
    BlogComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MarkdownModule.forChild(),
    SharedModule
  ]
})
export class BlogModule { }
