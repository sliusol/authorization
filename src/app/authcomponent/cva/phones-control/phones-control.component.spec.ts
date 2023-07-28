import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesControlComponent } from './phones-control.component';

describe('PhonesControlComponent', () => {
  let component: PhonesControlComponent;
  let fixture: ComponentFixture<PhonesControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhonesControlComponent]
    });
    fixture = TestBed.createComponent(PhonesControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
