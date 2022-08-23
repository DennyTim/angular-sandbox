import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "sandbox-a14";
  isSideNavCollapsed = false;
  screenWidth = 0;

  handleToggle(event: { screenWidth: number; collapsed: boolean }): void {
    this.screenWidth = event.screenWidth;
    this.isSideNavCollapsed = event.collapsed;
  }
}
