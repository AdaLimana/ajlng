import { TestBed } from '@angular/core/testing';

import { AjlngService } from './ajlng.service';

describe('AjlngService', () => {
  let service: AjlngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjlngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
