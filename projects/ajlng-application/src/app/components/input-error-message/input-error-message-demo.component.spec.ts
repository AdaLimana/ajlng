import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputErrorMessageDemoComponent } from './input-error-message-demo.component';

describe('InputErrorMessageDemoComponent', () => {
  let component: InputErrorMessageDemoComponent;
  let fixture: ComponentFixture<InputErrorMessageDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputErrorMessageDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputErrorMessageDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
