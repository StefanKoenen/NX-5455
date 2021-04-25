import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'tm-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'dev-app';

    /**
     * Constructor
     * @param {Router} private router [description]
     */
    constructor(private router: Router) {}

    /**
     * Initialization
     */
    ngOnInit() {}
}
