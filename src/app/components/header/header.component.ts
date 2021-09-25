import { AfterViewInit, Component, ElementRef, Renderer2, ViewChildren } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
    this.isDarkTheme = ! this.isDarkTheme;
    this.theme.changeTheme();
  }
}