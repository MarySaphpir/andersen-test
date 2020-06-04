import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import {SearchComponent} from './search.component';
import {SearchService} from './service/search.service';
import {of} from 'rxjs';


describe('Component: Search', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchService: SearchService;
  let submitButton: DebugElement;
  let inputElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [
        {provide: SearchService, useValue: {
            getItems: (query) => of('result')
          }}
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    searchService = TestBed.get(SearchService);

    fixture.detectChanges();
    submitButton = fixture.debugElement.query(By.css('#search-button'));
    inputElement = fixture.debugElement.query(By.css('#search-input'));
  });

  it('From the beginning input field and button should be available', () => {
    fixture.detectChanges();
    expect(submitButton.nativeElement).toBeTruthy();
    expect(inputElement.nativeElement).toBeTruthy();
  });
  it('should load search result', () => {
    spyOn(searchService, 'getItems')
      .and
      .callThrough();
    fixture.detectChanges();
    component.searchField.setValue('123');
    component.search();
    expect(searchService.getItems).toHaveBeenCalledWith({query: '123'});
    expect(component.results).toEqual('result');
  });
  it('should not load search result', () => {
    spyOn(searchService, 'getItems')
      .and
      .callThrough();
    fixture.detectChanges();
    component.searchField.setValue('');
    component.search();
    expect(searchService.getItems).not.toHaveBeenCalledWith({query: '123'});
    expect(component.results).not.toEqual('result');
  });
});
