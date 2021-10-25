import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';

import { ResourcesComponent } from './resources.component';

describe('ResourcesComponent', () => {
  let component: ResourcesComponent;
  let fixture: ComponentFixture<ResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        MarkdownModule.forRoot({loader:HttpClient})],
      declarations: [ ResourcesComponent ],
      providers:[MarkdownService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
