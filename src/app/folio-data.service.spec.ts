/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FolioDataService } from './folio-data.service';

describe('FolioDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FolioDataService]
    });
  });

  it('should ...', inject([FolioDataService], (service: FolioDataService) => {
    expect(service).toBeTruthy();
  }));
});
