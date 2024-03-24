import { Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { ViewComponent } from './post/view/view.component';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
    },
    {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
    },
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'index', component: IndexComponent },
            { path: 'create', component: CreateComponent },
            { path: ':postId/edit', component: EditComponent },
            { path: ':postId/view', component: ViewComponent },
        ]
    },
];
