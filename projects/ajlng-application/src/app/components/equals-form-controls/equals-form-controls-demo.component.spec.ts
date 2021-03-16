import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualsFormControlsDemoComponent } from './equals-form-controls-demo.component';

describe('EqualsFormControlsDemoComponent', () => {
  let component: EqualsFormControlsDemoComponent;
  let fixture: ComponentFixture<EqualsFormControlsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EqualsFormControlsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EqualsFormControlsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
