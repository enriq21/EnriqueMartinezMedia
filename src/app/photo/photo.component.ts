import { Component, OnInit } from '@angular/core';
import { PortfolioService } from  '../shared/services/portfolio-service';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  providers: [PortfolioService]
}) 
export class PhotoComponent implements OnInit {

  ngOnInit(): void {
  
  }

}
