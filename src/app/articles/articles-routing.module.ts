import { NgModule } from "@angular/core";
import {
  RouterModule,
  Routes
} from "@angular/router";
import { ArticlesComponent } from "./articles.component";

const routes: Routes = [
  {
    path: "medium",
    component: ArticlesComponent
  },
  {
    path: "dev-community",
    component: ArticlesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {
}
