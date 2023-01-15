import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage=0
  pages= [] ;
  term=[];

  constructor( private wikipedia: WikipediaService) {}
  
  onTerm(term: string) {
  
   this.wikipedia.search(term).subscribe((response:any ) =>{
     this.pages = response.query.search;
     this.term = response.query.search;
     console.log(this.pages)
     console.log(this.term)
   });
  
  }
  checkWindowIndex(index:number){
    return Math.abs(this.currentPage - index) < 5;
  }
 
  
}
