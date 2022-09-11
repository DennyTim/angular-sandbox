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
    path: "angular-second",
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {
}
