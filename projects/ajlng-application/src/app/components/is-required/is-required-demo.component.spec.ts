import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsRequiredDemoComponent } from './is-required-demo.component';

describe('IsRequiredDemoComponent', () => {
  let component: IsRequiredDemoComponent;
  let fixture: ComponentFixture<IsRequiredDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsRequiredDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsRequiredDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
