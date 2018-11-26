import { Component, OnInit } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-india',
	templateUrl: './compass.component.html',
	styleUrls: ['./compass.component.scss']
})
export class CompassComponent implements OnInit {

	faAngleLeft = faAngleLeft;
	faAngleRight = faAngleRight;

	constructor() { }

	images = [{
		_id: 1,
		url: "assets/travel/india-carousel-taj-1.jpg",
		caption: "Taj Mahal, Agra",
		detail: "We took a 10pm flight from Pune to Delhi, arrived at midnight, hired a driver, drove through the night to Agra to arrive before the sun rise. Amazing."
	},
	{
		_id: 2,
		url: "assets/travel/india-carousel-lotus-temple-4.jpg",
		caption: "The Lotus Temple, Delhi",
		detail: "The Lotus Temple, located in Delhi, India, is a Bahá'í House of Worship that was dedicated in December 1986, costing $10 million. Notable for its flowerlike shape, it has become a prominent attraction in the city of Delhi."
	},
	{
		_id: 3,
		url: "assets/travel/india-carousel-kerala-5.jpg",
		caption: "Munnar Tea Gardens, Kerala",
		detail: "Munnar is a town and hill station located in the Idukki district of the southwestern Indian state of Kerala. Munnar is situated at around 1,600 metres (5,200 ft) above mean sea level,in the Western Ghats mountain range."
	},
	{
		_id: 4,
		url: "assets/travel/india-carousel-kerala-beach-6.jpg",
		caption: "Fort Kochi Beach",
		detail: "Unique views and point of interests are the so-called Chinese fishing nets and the fishermen working there."
	}];

	ngOnInit() {
	}

}
