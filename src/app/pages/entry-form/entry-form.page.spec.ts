import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntryFormPage } from './entry-form.page';

describe('EntryFormPage', () => {
  let component: EntryFormPage;
  let fixture: ComponentFixture<EntryFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EntryFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
