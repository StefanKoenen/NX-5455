import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'tm-app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    constructor() {}
}
