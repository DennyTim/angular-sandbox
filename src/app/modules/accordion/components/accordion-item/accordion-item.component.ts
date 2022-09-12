import {
  Component,
  Input
} from "@angular/core";
import { IAccordionItem } from "../../models/accordion-item.model";

@Component({
  selector: "app-accordion-item",
  templateUrl: "./accordion-item.component.html",
  styleUrls: ["./accordion-item.component.scss"]
})
export class AccordionItemComponent {
  @Input()
  public items: IAccordionItem[] = [];

  public toggle(item: IAccordionItem): void {
    item.isExpanded = !item.isExpanded;
  }
}
