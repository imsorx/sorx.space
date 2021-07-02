import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  url = environment.aboutURL;
  isFailed: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onError(event: string) {
    this.isFailed = true;
  }
}
