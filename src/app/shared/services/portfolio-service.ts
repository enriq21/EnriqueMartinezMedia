import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Photo } from '../models/photo';
import { Gallery } from '../models/gallery';

@Injectable()

export class PortfolioService {
  private portfolioUrl: string = 'https://api.mlab.com/api/1/databases/portfolio/collections';
  private apiKey: string = 'Qkawfsy8Y84Jre5tDYLRUwJW3ZV75N5E';

  constructor (private http: HttpClient){}

  getGalleries(): Observable<Gallery[]> {
    const params: string = [
      `apiKey=${this.apiKey}`
    ].join('&');

    return  this.http.get<Gallery[]>(`${this.portfolioUrl}/galleries?${params}`)
  }

  getGallery(galleryId:number): Observable<Photo[]> {
    const params: string = [
      `q={"galleryId":${galleryId}}`,
      `apiKey=${this.apiKey}`
    ].join('&');
    
    return this.http.get<Photo[]>(`${this.portfolioUrl}/photo/?${params}`);
  }

  getPhoto( _id: number ): Observable<Photo> {
    const params: string = [
      `apiKey=${this.apiKey}`
    ].join('&');

    console.log(this.http.get<Photo>(`${this.portfolioUrl}/photo/${_id}`));
    return this.http.get<Photo>(`${this.portfolioUrl}/photo/${_id}?${params}`)

  }  

  // Map Response to Photo API Standard

  // private toPhoto(photo): Photo {
  //   console.log('photo', photo);
  //   return {
  //     _id: photo.id,
  //     slug: photo.slug,
  //     url: photo.url,
  //     caption: photo.caption
  //   };
  // }

  // private toGallery(gallery): Gallery {
  //   // console.log('gallery', gallery);
  //   return {
  //     _id: gallery._id,
  //     name: gallery.name,
  //     gallerySlug: gallery.gallerySlug,          
  //     description: gallery.description,
  //     thumbnail: gallery.thumbnail,
  //   };
  // }

}; 