import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AuthGuard } from './app/auth.guard';
import { provideRouter, Routes } from '@angular/router';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { graphqlProvider } from './app/graphql.provider'

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import("./app/pokemon/pokemon.routes")
    },
    {
        path: 'login',
        title: 'Login',
        loadComponent: () => import("./app/login/login.component").then(module => module.LoginComponent)
    },
    {
        path: '**',
        title: 'Page not found',
        loadComponent: () => import("./app/page-not-found/page-not-found.component").then(module => module.PageNotFoundComponent)
    }
];


bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom(BrowserModule, FormsModule),
        provideRouter(routes), provideHttpClient(), graphqlProvider
    ]
})
  .catch(err => console.error(err));