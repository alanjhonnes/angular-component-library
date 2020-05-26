import { TestBed } from '@angular/core/testing';

import { MjvComponentLibraryService } from './mjv-component-library.service';

describe('MjvComponentLibraryService', () => {
  let service: MjvComponentLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MjvComponentLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
