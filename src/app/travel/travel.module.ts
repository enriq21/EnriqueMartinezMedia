import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelRoutingModule } from './travel.routing';
import { TravelComponent } from './travel.component';

import { PortfolioService } from '../shared/services/portfolio-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core/core.module';
import { IndiaComponent } from './india/india.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VenezuelaComponent } from './venezuela/venezuela.component';
import { HaircutsComponent } from './haircuts/haircuts.component';


@NgModule({
  declarations: [
    TravelComponent,
    IndiaComponent,
    VenezuelaComponent,
    HaircutsComponent
  ],
  entryComponents: [

  ],
  imports: [
    CommonModule,
    CoreModule,
    TravelRoutingModule,
    FontAwesomeModule,
    NgbModule.forRoot()
  ],
  exports: [
  ],
  providers: [
    PortfolioService    
  ]
})

export class TravelModule { }
