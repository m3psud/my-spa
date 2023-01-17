import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list-pagination/page-list.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    PageListComponent
 
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
