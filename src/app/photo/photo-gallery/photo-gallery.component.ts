import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute} from '@angular/router';
import { PortfolioService } from  '../../shared/services/portfolio-service';
import { Photo } from '../../shared/models/photo';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';

@Component({
  selector: 'app-photo-gallery',
  templateUrl:'photo-gallery.component.html',
  styleUrls: ['photo-gallery.component.scss']
})

export class PhotoGalleryComponent implements OnInit {
  
  constructor(
    private service: PortfolioService, 
    private route: ActivatedRoute,
    private modalService: NgbModal) {}
  
  gallery: Photo[];

  ngOnInit() {
    let galleryId = this.route.snapshot.params['galleryId'];
    // let gallery_slug = this.route.snapshot.params['gallerySlug'];
    this.service.getGallery(galleryId).subscribe((gallery) => this.gallery = gallery,
      (err: any) => console.log(err),
      () => console.log(this.gallery));
  }
  
  openPhotoSingleModal(image_id) {
    const modalRef = this.modalService.open(PhotoModalComponent, { centered: true, windowClass: 'single-photo-modal' });
    modalRef.componentInstance.gallery = this.gallery;
    modalRef.componentInstance.image_id = image_id;
  }

}
  