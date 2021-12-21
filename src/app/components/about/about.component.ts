import { HttpClient } from '@angular/common/http';
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
  content: string | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<string>(this.url,{responseType: 'text' as 'json'}).subscribe(res => {
      this.content = res.split('\n').splice(0,38).join('\n');
    });
  }

  onError(event: string) {
    this.isFailed = true;
  }
}
