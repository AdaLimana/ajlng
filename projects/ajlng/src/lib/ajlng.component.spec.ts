import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjlngComponent } from './ajlng.component';

describe('AjlngComponent', () => {
  let component: AjlngComponent;
  let fixture: ComponentFixture<AjlngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjlngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjlngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
