import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponentModule } from "../card-component/card-component.module";
import { StarRatingsItemComponent } from "./component/star-ratings-item/star-ratings-item.component";
import { StarRatingsRoutingModule } from "./star-ratings-routing.module";
import { StarRatingsComponent } from "./star-ratings.component";

@NgModule({
  imports: [
    CommonModule,
    StarRatingsRoutingModule,
    CardComponentModule
  ],
  declarations: [
    StarRatingsComponent,
    StarRatingsItemComponent
  ]
})
export class StarRatingsModule {
}
