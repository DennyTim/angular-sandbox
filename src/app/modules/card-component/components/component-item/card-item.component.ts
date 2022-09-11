import {
  Component,
  Input
} from "@angular/core";

@Component({
  selector: "app-card-item",
  templateUrl: "./card-item.component.html",
  styleUrls: ["./card-item.component.scss"]
})
export class CardItemComponent {
  @Input() public title = "Card";
  @Input() public subTitle = "Components";
  @Input() public iconClasses = "fas fa-info-circle";
}
