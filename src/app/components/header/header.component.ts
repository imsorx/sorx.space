import { AfterViewInit, Component, ElementRef, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  isOpen: boolean = false;
  @ViewChildren('close') links?: ElementRef[];

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.links?.forEach(link => {
      this.renderer.listen(link.nativeElement, 'click', () => this.isOpen = false);
    });
  }
}