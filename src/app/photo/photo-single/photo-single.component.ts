import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { PortfolioService } from  '../../shared/services/portfolio-service';
import { Photo } from '../../shared/models/photo';


@Component({
  selector: 'app-photo-single',
  templateUrl: './photo-single.component.html',
  styleUrls: ['./photo-single.component.scss']
})

export class PhotoSingleComponent implements OnInit {

  photo: Photo;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PortfolioService,
  ) { }

  ngOnInit() {
    let _id = this.route.snapshot.params['_id']
    this.service.getPhoto(_id).subscribe((photo) => this.photo = photo,
    (err: any) => console.log(err),
    () => console.log());
  }


}
