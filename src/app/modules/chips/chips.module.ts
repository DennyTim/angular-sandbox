import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CardComponentModule } from "../card-component/card-component.module";
import { ChipsRoutingModule } from "./chips-routing.module";
import { ChipsComponent } from "./chips.component";
import { ChipsItemComponent } from "./components/chips-item/chips-item.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChipsRoutingModule,
    CardComponentModule
  ],
  declarations: [
    ChipsComponent,
    ChipsItemComponent
  ]
})
export class ChipsModule {
}
