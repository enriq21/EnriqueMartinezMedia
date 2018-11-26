import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PortfolioService } from "../shared/services/portfolio-service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CoreModule } from "../core/core.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { WebComponent } from "./web.component";
import { WebRoutingModule } from "./web.routing";
import { CompassComponent } from "./compass/compass.component";

@NgModule({
	declarations: [WebComponent, CompassComponent],
	entryComponents: [],
	imports: [
		CommonModule,
		CoreModule,
		WebRoutingModule,
		FontAwesomeModule,
		NgbModule.forRoot()
	],
	exports: [],
	providers: [PortfolioService]
})
export class WebModule { }
