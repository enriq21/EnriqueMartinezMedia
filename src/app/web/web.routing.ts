import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WebComponent } from './web.component';
import { CompassComponent } from './compass/compass.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: WebComponent, pathMatch: 'full'},
            { path: 'compass', component: CompassComponent},
        ])
    ],
    exports: [RouterModule]
    })
    
export class WebRoutingModule { } 
