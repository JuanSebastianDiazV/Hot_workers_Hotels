import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPhotosAndVideosPage } from './my-photos-and-videos.page';

describe('MyPhotosAndVideosPage', () => {
  let component: MyPhotosAndVideosPage;
  let fixture: ComponentFixture<MyPhotosAndVideosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyPhotosAndVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
