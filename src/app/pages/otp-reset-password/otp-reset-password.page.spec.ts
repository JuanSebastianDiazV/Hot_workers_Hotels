import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtpResetPasswordPage } from './otp-reset-password.page';

describe('OtpResetPasswordPage', () => {
  let component: OtpResetPasswordPage;
  let fixture: ComponentFixture<OtpResetPasswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OtpResetPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
