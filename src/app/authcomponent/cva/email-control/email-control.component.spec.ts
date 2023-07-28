import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailControlComponent } from './email-control.component';

describe('EmailControlComponent', () => {
  let component: EmailControlComponent;
  let fixture: ComponentFixture<EmailControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailControlComponent]
    });
    fixture = TestBed.createComponent(EmailControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
