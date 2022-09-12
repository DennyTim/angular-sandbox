import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponentModule } from "../card-component/card-component.module";
import { AccordionRoutingModule } from "./accordion-routing.module";
import { AccordionComponent } from "./accordion.component";
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItemComponent
  ],
  imports: [
    CommonModule,
    AccordionRoutingModule,
    CardComponentModule
  ]
})
export class AccordionModule {
}
