import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoRoutingModule } from './photo.routing';

import { PortfolioService } from '../shared/services/portfolio-service';

import { PhotoComponent } from './photo.component';
import { PhotoGalleriesComponent } from './photo-galleries/photo-galleries.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { PhotoSingleComponent } from './photo-single/photo-single.component';
import { PhotoModalComponent } from './photo-modal/photo-modal.component';
import { PhotoCarouselComponent } from './photo-carousel/photo-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    PhotoComponent,
    PhotoGalleryComponent,
    PhotoSingleComponent,
    PhotoGalleriesComponent,
    PhotoModalComponent,
    PhotoCarouselComponent,
  ],
  entryComponents: [
    PhotoModalComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    PhotoRoutingModule,
    NgbModule.forRoot()
  ],
  exports: [
    PhotoModalComponent
  ],
  providers: [
    PortfolioService    
  ]
})

export class PhotoModule { }
