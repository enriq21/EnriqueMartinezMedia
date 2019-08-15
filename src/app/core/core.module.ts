import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { SocialLinksComponent } from '../contact/social-links/social-links.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from '../contact/contact-form/contact-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { StickyElementDirective } from '../shared/directives/sticky-element.directive';
import { FrameImageDirective } from '../shared/directives/frame-image.directive';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    FooterComponent,
    SocialLinksComponent,
    ContactFormComponent,
    CoreComponent,
    StickyElementDirective,
    FrameImageDirective
  ],
  entryComponents: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    SocialLinksComponent,
    FooterComponent,
    ContactFormComponent,
    StickyElementDirective,
    FrameImageDirective
  ],
  providers: [

  ]
})

export class CoreModule { }
