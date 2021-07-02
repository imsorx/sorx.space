import { Component, HostListener, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, map, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {

  scroll$: Observable<boolean>;
  isScrolled: boolean = false;

  constructor() {
    this.scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      map((y: number) => y > 200),
      distinctUntilChanged()
    );
  }

  ngOnInit(): void {
    this.scroll$.subscribe(v => this.isScrolled = v);
  }

  scrollToTop() {
    window.scrollTo({
      top: -window.pageYOffset,
      left: 0,
      behavior: 'smooth'
    });
  }
}
