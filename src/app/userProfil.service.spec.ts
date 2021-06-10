import { TestBed } from '@angular/core/testing';

import { userProfilServices } from './userProfil.service';

describe('userProfilService', () => {
  let service: userProfilServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(userProfilServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
