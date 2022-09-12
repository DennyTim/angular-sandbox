import { Component } from "@angular/core";

@Component({
  selector: "app-chips",
  templateUrl: "./chips.component.html",
  styleUrls: ["./chips.component.scss"]
})
export class ChipsComponent {
  public title = "chip-input";

  public items = ["angular", "chip", "tutorial"];
}
