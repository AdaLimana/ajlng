import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDebugDemoComponent } from './form-debug-demo.component';

describe('FormDebugDemoComponent', () => {
  let component: FormDebugDemoComponent;
  let fixture: ComponentFixture<FormDebugDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDebugDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDebugDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
