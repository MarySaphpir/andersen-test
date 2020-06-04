import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SearchService} from './service/search.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  searchField = new FormControl('');
  results: string;

  constructor(private searchService: SearchService) {
  }

  search() {
    const query = this.searchField.value;
    if (query.length) {
      this.searchService.getItems({query})
        .pipe(take(1))
        .subscribe((searchResult: string) => {
          this.results = searchResult;
        });
    }
  }
}
