import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppHelpersService } from '@tm/core';

@Component({
    selector: 'tm-app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent implements OnInit {
    constructor(private appService: AppHelpersService) {
        this.appService.beginLoading();
    }

    ngOnInit() {
        this.appService.endLoading();
    }
}
