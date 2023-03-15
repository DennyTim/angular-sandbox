import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import { CardComponentModule } from "../card-component/card-component.module";
import { OtpRoutingModule } from "./otp-routing.module";
import { OtpComponent } from "./otp.component";
import { OtpInputComponent } from "./components/otp-input/otp-input.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OtpRoutingModule,
    CardComponentModule
  ],
  declarations: [
    OtpComponent,
    OtpInputComponent
  ]
})
export class OtpModule {
}
