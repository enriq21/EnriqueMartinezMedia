import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PhotoGalleriesComponent } from './photo-galleries/photo-galleries.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { PhotoSingleComponent } from './photo-single/photo-single.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', redirectTo:'galleries', pathMatch: 'full'},
            { path: 'galleries', component: PhotoGalleriesComponent},
            { path: 'galleries/:galleryId', component: PhotoGalleryComponent},
            { path: 'photo/:_id', component: PhotoSingleComponent},
        ])
    ],
    exports: [RouterModule]
    })
    
export class PhotoRoutingModule { } 
