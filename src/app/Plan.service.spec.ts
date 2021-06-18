import { TestBed } from '@angular/core/testing';
import { PlanServices } from './Plan.service';

describe('Plan', () => {
  let service: PlanServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
