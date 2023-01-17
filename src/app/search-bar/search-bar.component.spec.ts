import { WikipediaService } from '../wikipedia.service'; 
import {ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Observable, async, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { PageListComponent } from '../page-list-pagination/page-list.component';
import { MockComponent } from 'ng-mocks';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, Injector, Input, inject } from '@angular/core';




class MockWikipediaService {
  search(): Observable<any> { return null as any;}
}

describe('SearchBarComponent', () => {
  let injector: TestBed;
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let WikipediaService: WikipediaService;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [  FormsModule, BrowserAnimationsModule],
      declarations: [ SearchBarComponent, MockComponent(PageListComponent) ],
      providers: [
        { provide: WikipediaService, useClass:  MockWikipediaService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    WikipediaService = TestBed.get( WikipediaService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Dado a pesquisa
      Quando for executada com sucesso
      Deve retornar o title das pesquisas`, () => {

    const mockResponse = {
        query: {
          items: [
            { title: 'page title '}
          ]
        }
    };

    spyOn(WikipediaService, 'search').and.returnValue(of(new HttpResponse({body: mockResponse})));
    
    const input = fixture.nativeElement.querySelector('.input');
    component.term = 'space';

 input.click();
    fixture.detectChanges();

    const queryItem = fixture.debugElement.query(By.directive(MockComponent(PageListComponent)));

    expect(WikipediaService.search).toHaveBeenCalledTimes(1);
    expect(WikipediaService.search).toHaveBeenCalledWith("space");
    expect(queryItem).toBeTruthy();
  });
})
