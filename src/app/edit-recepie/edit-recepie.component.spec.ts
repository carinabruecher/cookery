import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecepieComponent } from './edit-recepie.component';

describe('EditRecepieComponent', () => {
  let component: EditRecepieComponent;
  let fixture: ComponentFixture<EditRecepieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRecepieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecepieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
