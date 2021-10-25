import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { BlogService } from './blog.service';

describe('BlogService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: BlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    injector = getTestBed();
    service = TestBed.inject(BlogService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get posts response', () => {
    let posts:Post[] = [];

    service.posts.subscribe(posts => expect(posts).toHaveSize(0));
    httpMock.expectOne(environment.blogIndexURL).flush(posts);
  });
});
