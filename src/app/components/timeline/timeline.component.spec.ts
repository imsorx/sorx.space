import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineComponent } from './timeline.component';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ TimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('timeline items is undfined initially',()=>{
    expect(component.items).toBeUndefined();
  });
});
