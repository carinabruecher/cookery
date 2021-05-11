import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRecepieComponent } from './add-new-recepie.component';

describe('AddNewRecepieComponent', () => {
  let component: AddNewRecepieComponent;
  let fixture: ComponentFixture<AddNewRecepieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewRecepieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewRecepieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
