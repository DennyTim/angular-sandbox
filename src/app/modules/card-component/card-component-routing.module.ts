import { NgModule } from "@angular/core";
import {
  RouterModule,
  Routes
} from "@angular/router";
import { CardComponentComponent } from "./card-component.component";


const routes: Routes = [
  {
    path: "",
    component: CardComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardComponentRoutingModule {
}
