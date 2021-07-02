import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

interface Timelog {
  year: number,
  activity: string,
  vanue: string | null,
  location: string | null
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  items: Timelog[] | undefined = undefined;
  url = environment.timelineURL;
  isFailed: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Timelog[]>(this.url).subscribe(data => this.items = data, err => this.isFailed = true);
  }

}
