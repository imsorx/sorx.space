import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, Renderer2, ViewChildren } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [trigger('reveal', [
    transition('hidden => open', [
      query('a,button', [
        style({ "opacity": "0", "transform": "translateX(100%)" }),
        stagger(100, animate('250ms cubic-bezier(0.77, 0.2, 0.05, 1)', style({ "opacity": 1, "transform": "translateX(0)" })))
      ])
    ]),
    transition('open => hidden', [
      query('a,button', [
        style({ "opacity": "1" }),
        animate('200ms cubic-bezier(0.77, 0.2, 0.05, 1)', style({ "opacity": 0 }))
      ])
    ])
  ])]
})
export class HeaderComponent implements AfterViewInit {

  isOpen: boolean = false;
  isDarkTheme = false;

  @ViewChildren('close') links?: ElementRef[];

  constructor(private renderer: Renderer2, private theme: ThemeService) {
    let darkModeOn = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    darkModeOn && this.toggle();
  }

  ngAfterViewInit() {
    this.links?.forEach(link => {
      this.renderer.listen(link.nativeElement, 'click', () => this.isOpen = false);
    });
  }

  toggle() {
    this.isDarkTheme = !this.isDarkTheme;
    this.theme.changeTheme();
  }
}