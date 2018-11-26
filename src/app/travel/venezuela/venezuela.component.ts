import { Component, OnInit } from '@angular/core';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-venezuela',
  templateUrl: './venezuela.component.html',
  styleUrls: ['./venezuela.component.scss']
})
export class VenezuelaComponent implements OnInit {

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  constructor() { }
  
  images = [{ 
    _id: 1, 
    url: "assets/travel/venezuela/venezuela-carousel-flying.jpg", 
    caption: "Ultra Light Flying in Turen",
    detail: "We were brought here as a wedding gift by a friend.  It scared the shit out of our entire family, but it was one of the most exciting things I've ever done."
  },
  { 
    _id: 2, 
    url: "assets/travel/venezuela/venezuela-carousel-flying3.jpg", 
    caption: "Ultra Light Flying in Turen",
    detail: "Here's a closer look at the flyer.  There's not a whole lot to it. Basically, its a go cart with wings strapped to is back.. You should look her up on social media, @konukito"
  },
  {
    _id: 3, 
    url: "assets/travel/venezuela/venezuela-carousel-flying4.jpg", 
    caption: "Ultra Light Flying in Turen",
    detail: "The place is a private farm, run by a family who planted all the sunflowers as well.  I don't think i knew what to expect, until I got there.. I was a little sketched out about getting in there, but I really had no other option."
  }];

  ngOnInit() {
  }
}
