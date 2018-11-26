import { Component, OnInit } from '@angular/core';
import { Photo } from './shared/models/photo';
import { PortfolioService } from './shared/services/portfolio-service';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

	photos: Photo[];

	constructor(private service: PortfolioService) { }

	ngOnInit() {

	}

}
