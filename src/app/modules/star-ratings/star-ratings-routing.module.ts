import { NgModule } from "@angular/core";
import {
  RouterModule,
  Routes
} from "@angular/router";
import { StarRatingsComponent } from "./star-ratings.component";

const routes: Routes = [
  {
    path: "",
    component: StarRatingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarRatingsRoutingModule {
}
