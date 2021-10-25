import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MarkdownModule.forRoot({ loader: HttpClient })
      ],
      declarations: [AboutComponent],
      providers: [MarkdownService]
    })
      .compileComponents();
  });

  beforeEach(() => {
   fixture = TestBed.createComponent(AboutComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
