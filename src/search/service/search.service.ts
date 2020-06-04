import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class SearchService {
  constructor(private httpClient: HttpClient) {
  }

  getItems(params: {[key: string]: string}): Observable<string> {
    return this.httpClient.get('/api/items',
      {
        responseType: 'text',
        params
      });
  }
}
