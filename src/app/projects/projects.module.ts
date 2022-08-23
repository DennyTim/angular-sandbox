import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { ProjectsComponent } from "./projects.component";

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  declarations: [
    ProjectsComponent
  ]
})
export class ProjectsModule {
}
