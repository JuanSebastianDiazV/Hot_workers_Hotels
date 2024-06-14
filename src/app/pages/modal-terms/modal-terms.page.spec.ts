import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalTermsPage } from './modal-terms.page';

describe('ModalTermsPage', () => {
  let component: ModalTermsPage;
  let fixture: ComponentFixture<ModalTermsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalTermsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
