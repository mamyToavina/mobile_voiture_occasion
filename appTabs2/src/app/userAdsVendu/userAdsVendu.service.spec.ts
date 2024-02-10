/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserAdsVenduService } from './userAdsVendu.service';

describe('Service: UserAdsVendu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAdsVenduService]
    });
  });

  it('should ...', inject([UserAdsVenduService], (service: UserAdsVenduService) => {
    expect(service).toBeTruthy();
  }));
});
