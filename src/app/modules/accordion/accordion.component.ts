import { Component } from "@angular/core";
import { IAccordionItem } from "./models/accordion-item.model";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"]
})
export class AccordionComponent {
  public accordionItems: IAccordionItem[] = [
    {
      title: "Example 1",
      content: "Exampled Content 1",
      isExpanded: false
    },
    {
      title: "Example 2",
      content: "Exampled Content 2",
      isExpanded: false
    }
  ];
}
