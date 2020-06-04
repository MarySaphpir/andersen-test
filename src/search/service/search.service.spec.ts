import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {SearchService} from './search.service';
import {HttpParams} from '@angular/common/http';

describe('SearchService', () => {
  let injector: TestBed;
  let service: SearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });
    injector = getTestBed();
    service = injector.get(SearchService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('get search result and check method', () => {
    it('should return an Observable<string>', () => {
      const dummyUsers = '/tools/*';

      service.getItems({query: 'cofaxTools'}).subscribe(users => {
        expect(users.length).toBe(dummyUsers.length);
        expect(users).toEqual(dummyUsers);
      });

      const req = httpMock.expectOne(`/api/items?query=cofaxTools`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyUsers);
    });
  });

  describe('Check param', () => {
    it('should return an Observable<string>', () => {
      const dummyUsers = '/tools/*';
      const dummyParams = new HttpParams().set('query', 'cofaxTools');

      service.getItems({query: 'cofaxTools'})
        .subscribe(result => {
          expect(result).toBe(dummyUsers);
        });

      const req = httpMock.expectOne(`/api/items?query=cofaxTools`);
      expect(req.request.url).toBe(`/api/items`);
      expect(req.request.params).not.toEqual(dummyParams);

      req.flush(dummyUsers);
    });
  });
});
