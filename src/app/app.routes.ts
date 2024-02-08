import { Routes } from '@angular/router';
import { LandingPageComponent } from './modules/customer/landing-page/landing-page.component';
import { AllProductsComponent } from './modules/customer/all-products/all-products.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LandingPageComponent,
        children: [
            {
                path: 'Home',
                component: AllProductsComponent,
                title: 'Online Deals'
            }
        ]
    },
];
