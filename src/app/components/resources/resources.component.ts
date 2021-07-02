import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  url = environment.resourceURL;
  isFailed: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onError(event: any) {
    this.isFailed = true;
  }
}
