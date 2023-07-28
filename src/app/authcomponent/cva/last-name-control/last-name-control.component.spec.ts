import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNameControlComponent } from './last-name-control.component';

describe('LastNameControlComponent', () => {
  let component: LastNameControlComponent;
  let fixture: ComponentFixture<LastNameControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastNameControlComponent]
    });
    fixture = TestBed.createComponent(LastNameControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
