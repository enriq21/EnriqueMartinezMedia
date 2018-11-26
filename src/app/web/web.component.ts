import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../shared/services/portfolio-service';


@Component({
	selector: 'app-web',
	templateUrl: './web.component.html',
	styleUrls: ['./web.component.scss'],
	providers: [PortfolioService]
})

export class WebComponent implements OnInit {

	ngOnInit(): void {

	}

}
