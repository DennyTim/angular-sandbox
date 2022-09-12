import {
  Component,
  Input
} from "@angular/core";

@Component({
  selector: "app-progress-bar-item",
  templateUrl: "./progress-bar-item.component.html",
  styleUrls: ["./progress-bar-item.component.scss"]
})
export class ProgressBarItemComponent {
  @Input() public value = 0;
  @Input() public max = 100;
}
