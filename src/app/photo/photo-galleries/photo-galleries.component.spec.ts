import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGalleriesComponent } from './photo-galleries.component';

describe('PhotoGalleriesComponent', () => {
  let component: PhotoGalleriesComponent;
  let fixture: ComponentFixture<PhotoGalleriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoGalleriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGalleriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
