import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from "app/landing/landing.component";
import { ContactComponent } from "app/contact/contact.component"

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        pathMatch: 'full'
    },
    {
        path: 'photography',
        loadChildren: 'app/photo/photo.module#PhotoModule'
    },
    {
        path: 'travel',
        loadChildren: 'app/travel/travel.module#TravelModule'
    },
    {
        path: 'web',
        loadChildren: 'app/web/web.module#WebModule'
    },
    {
        path: 'contact',
        component: ContactComponent,
        children: [
            {
                path: '',
                component: ContactComponent
            }
        ]
    }
];

export const Routing = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});