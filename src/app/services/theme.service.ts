import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Theme } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  activeTheme: number = 0;
  private themes: Theme[] = [
    { primary: '#2feaa8', secondary: '#028cf3' },
    { primary: '#40c9ff', secondary: '#e81cff' },
    { primary: '#0061ff', secondary: '#60efff' },
    { primary: '#f86ca7', secondary: '#f4d444' },
    { primary: '#696eff', secondary: '#f8acff' },
    { primary: '#8711c1', secondary: '#2472fc' },
    { primary: '#8338e3', secondary: '#e0a9bb' },
    { primary: '#858e96', secondary: '#60696b' },
    { primary: '#f9c823', secondary: '#fc506e' },
  ]

  constructor(@Inject(DOCUMENT) private document: Document) { }

  public changeTheme() {
    let index = Math.floor(Math.random() * this.themes.length);
    while (index == this.activeTheme) {
      index = Math.floor(Math.random() * this.themes.length);
    };
    this.activeTheme = index;

    this.document.documentElement.style.setProperty('--primary-accent', this.themes[index].primary);
    this.document.documentElement.style.setProperty('--secondary-accent', this.themes[index].secondary);
  }
}
