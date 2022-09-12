import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponentModule } from "../card-component/card-component.module";
import { ProgressBarRoutingModule } from "./progress-bar-routing.module";
import { ProgressBarComponent } from "./progress-bar.component";
import { ProgressBarItemComponent } from './components/progress-bar-item/progress-bar-item.component';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarRoutingModule,
    CardComponentModule
  ],
  declarations: [
    ProgressBarComponent,
    ProgressBarItemComponent
  ]
})
export class ProgressBarModule {
}
