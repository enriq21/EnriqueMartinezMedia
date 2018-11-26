import { Component } from '@angular/core';

@Component({selector: 'app-photo-carousel', templateUrl: './photo-carousel.component.html'})

export class PhotoCarouselComponent {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
}