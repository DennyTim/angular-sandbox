import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "sandbox-a14";
  isSideNavCollapsed = true;
  screenWidth = window.innerWidth;

  handleToggle(event: { screenWidth: number; collapsed: boolean }): void {
    this.screenWidth = event.screenWidth;
    this.isSideNavCollapsed = event.collapsed;
  }
}
