import { TestBed, inject } from '@angular/core/testing';

import { RekeningService } from './rekening.service';

describe('RekeningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RekeningService]
    });
  });

  it('should be created', inject([RekeningService], (service: RekeningService) => {
    expect(service).toBeTruthy();
  }));
});
