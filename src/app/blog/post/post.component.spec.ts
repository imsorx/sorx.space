import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        HttpClientTestingModule,
        MarkdownModule.forRoot({loader:HttpClient})
      ],
      declarations: [ PostComponent ],
      providers:[MarkdownService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
