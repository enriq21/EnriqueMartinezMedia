import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Photo } from 'app/shared/models/photo';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss']
})

export class PhotoModalComponent implements OnInit {
  
  @Input() gallery : Photo[];
  @Input() image_id : number;


  //reference to "myCarousel"
  @ViewChild('photoModalCarousel') photomodal: NgbCarousel;

  // gallery: Photo[];

  constructor( public activeModal: NgbActiveModal , config : NgbCarouselConfig ) {
    config.interval = 0;

  }

  
  ngOnInit() {
    

  }

}



