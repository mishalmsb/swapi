import { TestBed } from '@angular/core/testing';

import { SearchUtilService } from './search-util.service';

describe('SearchUtilService', () => {
  let service: SearchUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
