/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserAdsService } from './userAds.service';

describe('Service: UserAds', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAdsService]
    });
  });

  it('should ...', inject([UserAdsService], (service: UserAdsService) => {
    expect(service).toBeTruthy();
  }));
});
