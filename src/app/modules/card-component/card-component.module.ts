import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponentRoutingModule } from "./card-component-routing.module";
import { CardComponentComponent } from "./card-component.component";
import { CardItemComponent } from "./components/component-item/card-item.component";

@NgModule({
  imports: [
    CommonModule,
    CardComponentRoutingModule
  ],
  declarations: [
    CardComponentComponent,
    CardItemComponent
  ],
  exports: [
    CardItemComponent
  ]
})
export class CardComponentModule {
}
