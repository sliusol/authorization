import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNameControlComponent } from './first-name-control.component';

describe('FirstNameControlComponent', () => {
  let component: FirstNameControlComponent;
  let fixture: ComponentFixture<FirstNameControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstNameControlComponent]
    });
    fixture = TestBed.createComponent(FirstNameControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
