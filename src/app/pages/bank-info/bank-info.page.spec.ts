import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankInfoPage } from './bank-info.page';

describe('BankInfoPage', () => {
  let component: BankInfoPage;
  let fixture: ComponentFixture<BankInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BankInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
