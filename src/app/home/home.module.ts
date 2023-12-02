import { NgModule } from '@angular/core';
import { HomeRouterModule } from './home.router.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        HomeRouterModule,
        MatCardModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {}