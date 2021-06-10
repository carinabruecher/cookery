import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaushaltComponent } from './haushalt.component';

describe('HaushaltComponent', () => {
  let component: HaushaltComponent;
  let fixture: ComponentFixture<HaushaltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaushaltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaushaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
