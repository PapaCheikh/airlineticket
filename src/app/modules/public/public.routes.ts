import { Route } from "@angular/router";
import { PublicLayoutComponent } from "./public-layout/public-layout.component";

export const publicRoutes: Route[] = [
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./home/home.component').then(component => component.HomeComponent)
            },
            {
                path: 'home',
                loadComponent: () => import('./home/home.component').then(component => component.HomeComponent)
            }
        ]
    }
]