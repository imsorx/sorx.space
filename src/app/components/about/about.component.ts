import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  isLoading: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onLoad(event: string) {
    if (event) this.isLoading = false;
  }

  onError(event: string) {
    console.log(event);
  }
}
