import { TestBed } from '@angular/core/testing';
import { ToDolServices } from './ToDo.service';

describe('ToDo', () => {
  let service: ToDolServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDolServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
