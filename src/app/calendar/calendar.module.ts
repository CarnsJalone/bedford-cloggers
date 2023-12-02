import { NgModule } from '@angular/core';
import { CalendarRouterModule } from './calendar.router.module';
import { MatCardModule } from '@angular/material/card';
import { CalendarComponent } from './calendar.component';

@NgModule({
    imports: [
        CalendarRouterModule,
        MatCardModule
    ],
    declarations: [
        CalendarComponent
    ]
})
export class CalendarModule {}