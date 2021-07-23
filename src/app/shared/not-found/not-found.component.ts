import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// Generated by https://quicktype.io

export interface QuoteResponse {
  _id: string;
  tags: string[];
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  quote: QuoteResponse | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<QuoteResponse>('https://api.quotable.io/random?tags=technology&maxLength=100').subscribe(data => this.quote = data);
  }
}
