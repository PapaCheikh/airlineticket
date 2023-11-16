import { Route } from "@angular/router";

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('./modules/public/public.routes').then(route => route.publicRoutes)
    }
]