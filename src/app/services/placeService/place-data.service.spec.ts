import { TestBed } from '@angular/core/testing';

import { PlaceDataService } from './place-data.service';

describe('PlaceDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceDataService = TestBed.get(PlaceDataService);
    expect(service).toBeTruthy();
  });
});
