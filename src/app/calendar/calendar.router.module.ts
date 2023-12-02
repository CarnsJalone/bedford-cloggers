import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendarComponent } from "./calendar.component";

export const CALENDAR_ROUTERS: Routes =[
    {
        path: '',
        component: CalendarComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(CALENDAR_ROUTERS)
    ],
    exports: [
        RouterModule
    ]
})
export class CalendarRouterModule {}