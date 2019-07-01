import { inject, TestBed } from '@angular/core/testing';

import { CastingService } from './casting.service';


describe('CastingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CastingService]
    });
  });

  it('should be created', inject([CastingService], (service: CastingService) => {
    expect(service).toBeTruthy();
  }));
});
