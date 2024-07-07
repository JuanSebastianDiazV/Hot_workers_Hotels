import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosVideosPage } from './photos-videos.page';

describe('PhotosVideosPage', () => {
  let component: PhotosVideosPage;
  let fixture: ComponentFixture<PhotosVideosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PhotosVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
