import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkDetaillistComponent } from './ek-detaillist.component';

describe('EkDetaillistComponent', () => {
  let component: EkDetaillistComponent;
  let fixture: ComponentFixture<EkDetaillistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkDetaillistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkDetaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
