import { TestBed } from '@angular/core/testing';

import { DetailUtilService } from './detail-util.service';

describe('DetailUtilService', () => {
  let service: DetailUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
