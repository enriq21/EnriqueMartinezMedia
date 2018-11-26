import { Component, OnInit } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-haircuts',
  templateUrl: './haircuts.component.html',
  styleUrls: ['./haircuts.component.scss']
})
export class HaircutsComponent implements OnInit {

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  constructor() { }
  
  images = [{
  //   _id: 1, 
  //   url: "assets/travel/india/india-carousel-taj-1.jpg", 
  //   caption: "Taj Mahal, Agra",
  //   detail: "We took a 10pm flight from Pune to Delhi, arrived at midnight, hired a driver, drove through the night to Agra to arrive before the sun rise. Amazing."
  // },
  // { 
  //   _id: 2, 
  //   url: "assets/travel/india/india-carousel-lotus-temple-4.jpg", 
  //   caption: "The Lotus Temple, Delhi",
  //   detail: "The Lotus Temple, located in Delhi, India, is a Bahá'í House of Worship that was dedicated in December 1986, costing $10 million. Notable for its flowerlike shape, it has become a prominent attraction in the city of Delhi."
  // },
  // { 
    _id: 1, 
    url: "assets/travel/haircuts/panama-carousel.jpg", 
    caption: "Panama City, Panama",
    detail: "I think this is the first time it occured to me to take an actual picture, or to make it a 'thing'. It just seemed like a perfect backdrop."
  },
  { 
    _id: 2, 
    url: "assets/travel/haircuts/mumbai-carousel.jpg", 
    caption: "Mumbai, India",
    detail: "Without a doubt one of the top 3 haircuts I've ever had.  The stylist took his time with the details.  This photo is still mid-cut and doesn't show the final result. "
  }];

  ngOnInit() {
  }
}
