import { Component, OnInit } from '@angular/core';
import { PortfolioService } from  '../shared/services/portfolio-service';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss'],
  providers: [PortfolioService]
}) 
export class TravelComponent implements OnInit {

  ngOnInit(): void {
  
  }

}
