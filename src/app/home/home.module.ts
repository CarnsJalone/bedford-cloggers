import { NgModule } from '@angular/core';
import { HomeRouterModule } from './home.router.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    imports: [
        HomeRouterModule,
        MatCardModule,
        MatDividerModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {}