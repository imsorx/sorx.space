import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  isFailed: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onError(event: string) {
    this.isFailed = true;
  }
}
