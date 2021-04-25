import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HomeComponent, PageNotFoundComponent],
    providers: [],
})
export class App2Module {}
