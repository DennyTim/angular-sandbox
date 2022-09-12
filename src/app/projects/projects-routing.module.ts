import { NgModule } from "@angular/core";
import {
  RouterModule,
  Routes
} from "@angular/router";
import { ProjectsComponent } from "./projects.component";

const routes: Routes = [
  {
    path: "js-first",
    component: ProjectsComponent
  },
  {
    path: "js-second",
    component: ProjectsComponent
  },
  {
    path: "card-component",
    loadChildren: () => import("../modules/card-component/card-component.module")
      .then(m => m.CardComponentModule)
  },
  {
    path: "accordion",
    loadChildren: () => import("../modules/accordion/accordion.module")
      .then(m => m.AccordionModule)
  },
  {
    path: "progress-bar",
    loadChildren: () => import("../modules/progress-bar/progress-bar.module")
      .then(m => m.ProgressBarModule)
  },
  {
    path: "star-ratings",
    loadChildren: () => import("../modules/star-ratings/star-ratings.module")
      .then(m => m.StarRatingsModule)
  },
  {
    path: "chips",
    loadChildren: () => import("../modules/chips/chips.module")
      .then(m => m.ChipsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {
}
