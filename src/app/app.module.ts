import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { BodyComponent } from "./body/body.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { SublevelMenuComponent } from "./sidenav/sublevel-menu.component";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    SublevelMenuComponent
  ],
  providers: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "articles",
        loadChildren: () => import("./articles/articles.module")
          .then(m => m.ArticlesModule)
      },
      {
        path: "projects",
        loadChildren: () => import("./projects/projects.module")
          .then(m => m.ProjectsModule)
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
