import { Component, OnInit } from '@angular/core';
import { PortfolioService } from  '../../shared/services/portfolio-service';
import { Gallery } from '../../shared/models/gallery';


@Component({
  selector: 'app-photo-galleries',
  templateUrl: './photo-galleries.component.html',
  styleUrls: ['./photo-galleries.component.scss']
})

export class PhotoGalleriesComponent implements OnInit {

  galleries: Gallery[];

  constructor(private service: PortfolioService) { }

  ngOnInit() {
    console.log("photo-gallery");
    // this.service.getGalleries().subscribe(galleries => {this.galleries = galleries});
    this.service.getGalleries().subscribe((galleries) => this.galleries = galleries,
    (err: any) => console.log(err),
    () => console.log(this.galleries));

  }

}
