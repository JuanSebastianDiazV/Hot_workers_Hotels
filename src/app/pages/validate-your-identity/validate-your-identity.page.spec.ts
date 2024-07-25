import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidateYourIdentityPage } from './validate-your-identity.page';

describe('ValidateYourIdentityPage', () => {
  let component: ValidateYourIdentityPage;
  let fixture: ComponentFixture<ValidateYourIdentityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ValidateYourIdentityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
