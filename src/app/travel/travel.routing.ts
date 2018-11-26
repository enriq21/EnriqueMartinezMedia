import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IndiaComponent } from './india/india.component';
import { TravelComponent } from './travel.component';
import { VenezuelaComponent } from './venezuela/venezuela.component';
import { HaircutsComponent } from './haircuts/haircuts.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: TravelComponent, pathMatch: 'full'},
            { path: 'india', component: IndiaComponent},
            { path: 'venezuela', component: VenezuelaComponent},
            { path: 'haircuts', component: HaircutsComponent}
        ])
    ],
    exports: [RouterModule]
    })
    
export class TravelRoutingModule { } 
