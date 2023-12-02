import { Component } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from "@angular/router";

@Component({
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    selector: 'navigation',
    standalone: true,
    imports: [
        MatToolbarModule,
        MatIconModule,
        RouterModule
    ]
})
export class NavigationComponent {
}