import { NgModule } from '@angular/core';
import { TimelineComponent } from './timeline/timeline';
import { ElementTimeLineComponent } from './element-time-line/element-time-line';
@NgModule({
	declarations: [TimelineComponent,
    ElementTimeLineComponent],
	imports: [],
	exports: [TimelineComponent,
    ElementTimeLineComponent]
})
export class ComponentsModule {}
