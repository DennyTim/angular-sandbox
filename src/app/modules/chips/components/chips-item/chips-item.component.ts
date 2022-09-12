import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  ViewChild
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-chips-item",
  templateUrl: "./chips-item.component.html",
  styleUrls: ["./chips-item.component.scss"],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ChipsItemComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipsItemComponent {
  public items: string[] = [];
  @Input() public placeholder = "Type...";
  @Input() public removable = true;

  @ViewChild("inputField") public inputField: any;

  onChange: Function = () => {
  };
  onTouched: Function = () => {
  };

  constructor(private cd: ChangeDetectorRef) {
  }

  public onChipBarClick(): void {
    this.inputField.nativeElement.focus();
  }

  public removeItem(i: number): void {
    this.items.splice(i, 1);
    this.triggerChange(); // call trigger method
  }

  public removeAll(): void {
    this.items = [];
    this.triggerChange(); // call trigger method
  }

  public onKeyDown(event: KeyboardEvent, value: string): void {
    switch (event.keyCode) {
      case 13:
      case 188: {
        if (value && value.trim() !== "") {
          if (!this.items.includes(value)) {
            this.items = [...this.items, value];
            this.triggerChange(); // call trigger method
          }
          this.inputField.nativeElement.value = "";
          event.preventDefault();
        }
        break;
      }
      case 8: {
        if (!value && this.items.length > 0) {
          this.items.pop();
          this.items = [...this.items];
          this.triggerChange(); // call trigger method
        }
        break;
      }
      default:
        break;
    }
  }

  writeValue(value: any): void {
    this.items = value;
    this.cd.markForCheck();
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  triggerChange(): void {
    this.onChange(this.items);
  }
}
