import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ArticlesRoutingModule } from "./articles-routing.module";
import { ArticlesComponent } from "./articles.component";

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ],
  declarations: [ArticlesComponent]
})
export class ArticlesModule {
}
