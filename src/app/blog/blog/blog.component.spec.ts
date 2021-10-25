import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogService } from 'src/app/services/blog.service';

import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ BlogComponent ],
      providers:[BlogService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
