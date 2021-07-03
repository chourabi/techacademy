import { TestBed } from '@angular/core/testing';

import { MagazinsService } from './magazins.service';

describe('MagazinsService', () => {
  let service: MagazinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagazinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
