import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() src: string | undefined;
  @Input() width: string | undefined;
  @Input() height: string | undefined;
  @Input() label: string | undefined;
  isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onError() {
    this.src = 'assets/no-image.webp'
  }
}
