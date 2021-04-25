import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: 'app',
        // resolve: {
        //     session: SessionProviderService,
        // },
        loadChildren: () => import('./app2.module').then(m => m.App2Module),
    },
    {
        path: 'public',
        children: [{ path: '**', redirectTo: 'auth', pathMatch: 'full' }],
    },
    // { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: '**', redirectTo: 'app/home', pathMatch: 'full' },
];

@NgModule({
    declarations: [AppComponent],
    imports: [CommonModule, RouterModule.forRoot(routes), BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
