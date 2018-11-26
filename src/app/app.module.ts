import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Routing } from './app.routing';
import { AppComponent } from './app.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { LandingComponent } from './landing/landing.component';
import { IntroComponent } from './landing/intro/intro.component';
import { ProjectsComponent } from './landing/projects/projects.component';
import { ExperienceComponent } from './landing/experience/experience.component';
import { ContactComponent } from './contact/contact.component';

import { PortfolioService } from './shared/services/portfolio-service';
import { CoreModule } from './core/core.module';

@NgModule({
	declarations: [
		AppComponent,
		LandingComponent,
		IntroComponent,
		ProjectsComponent,
		ExperienceComponent,
		ContactComponent,
	],
	imports: [
		BrowserModule,
		Routing,
		HttpClientModule,
		CoreModule,
		FontAwesomeModule,
		NgbModule.forRoot()
	],
	exports: [
	],
	providers: [
		PortfolioService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
