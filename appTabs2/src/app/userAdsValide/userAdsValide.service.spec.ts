/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserAdsValideService } from './userAdsValide.service';

describe('Service: UserAdsValide', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAdsValideService]
    });
  });

  it('should ...', inject([UserAdsValideService], (service: UserAdsValideService) => {
    expect(service).toBeTruthy();
  }));
});
