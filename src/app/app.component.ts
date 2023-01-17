import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wsearch';

  currentPage: number = 1;
  currentPages: number = 1;
  pages: any = [];
  totalPages: any = [];
  term = [];

  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
      this.term = response.query.search;
      this.totalPages = response.query.search.length;
      console.log(this.pages);
      console.log(this.term);
    });
  }
}
