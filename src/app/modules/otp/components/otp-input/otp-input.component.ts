import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  isDevMode,
  QueryList,
  ViewChildren
} from "@angular/core";
import {
  AbstractControl,
  ControlValueAccessor,
  FormArray,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from "@angular/forms";

@Component({
  selector: "app-otp-input",
  templateUrl: "./otp-input.component.html",
  styleUrls: ["./otp-input.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: OtpInputComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: OtpInputComponent,
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtpInputComponent implements ControlValueAccessor, Validator {

  @ViewChildren("inputEl")
  public inputEls!: QueryList<ElementRef<HTMLInputElement>>;

  @Input()
  set size(size: number) {
    this.inputs = this.getFormArray(size);
    this.#size = size;
  }

  #size = 4;
  #scheduledFocus: number | null = null;
  inputs = this.getFormArray(this.#size);

  onChange?: (value: string) => void;
  onTouched?: () => void;

  /** ControlValueAccessor method */
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /** ControlValueAccessor method */
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /** ControlValueAccessor method */
  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.inputs.disable();
    } else {
      this.inputs.enable();
    }
  }

  /** ControlValueAccessor method */
  public writeValue(value: string): void {
    if (isDevMode() && value?.length) {
      throw new Error("Otp input is not supposed to be prefilled with data");
    }

    // Reset all input values
    this.inputs.setValue(new Array(this.#size).fill(""));
  }

  /** ControlValueAccessor method */
  public validate(control: AbstractControl<string, string>): ValidationErrors | null {
    if (!control.value || control.value.length < this.#size) {
      return {
        otpInput: "Value is incorrect"
      };
    }

    return null;
  }

  /** Control listener */
  public handleFocus(e: FocusEvent): void {
    // Select previously entered value to replace with a new input
    (e.target as HTMLInputElement).select();
  }

  /** Control listener */
  public handleInput(): void {
    this.#updateWiredValue();

    if (this.#scheduledFocus != null) {
      this.#focusInput(this.#scheduledFocus);
      this.#scheduledFocus = null;
    }
  }

  /** Control listener */
  public handleKeyDown(e: KeyboardEvent, i: number): void {
    if (e.key === "Backspace" || e.key === "Delete") {
      if (i > 0) {
        this.#scheduledFocus = i - 1;
      }
    }
  }

  /** Control listener */
  public handleKeyPress(e: KeyboardEvent, idx: number) {
    const isDigit = /\d/.test(e.key);

    // Safari fires Cmd + V through keyPress event as well
    // so we need to handle it here and let it through
    if (e.key === 'v' && e.metaKey) {
      return true;
    }

    if (isDigit && idx + 1 < this.#size) {
      // If user inputs digits & we are not on the last input we want
      // to advance the focus
      this.#scheduledFocus = idx + 1;
    }

    if (isDigit && this.inputs.controls[idx].value) {
      // If user deselects an input which already has a value
      // we want to clear it so that it doesn't have more than 1 digit
      this.inputs.controls[idx].setValue('');
    }

    return isDigit;
  }

  /** Control listener */
  public handlePaste(e: ClipboardEvent, idx: number) {
    e.preventDefault();

    if (idx !== 0) {
      // If the target input is not the first one - ignore
      return;
    }

    const pasteData = e.clipboardData?.getData('text');
    const regex = new RegExp(`\\d{${this.#size}}`);

    if (!pasteData || !regex.test(pasteData)) {
      // If there is nothing to be pasted or the pasted data does not
      // comply with the required format - ignore the event
      return;
    }

    for (let i = 0; i < pasteData.length; i++) {
      this.inputs.controls[i].setValue(pasteData[i]);
    }

    this.#focusInput(this.inputEls.length - 1);
    this.#updateWiredValue();
    this.onTouched?.();
  }


  #focusInput(idx: number) {
    // In order not to interfere with the input we setTimeout
    // before advancing the focus
    requestAnimationFrame(() => this.inputEls.get(idx)?.nativeElement.focus());
  }

  #updateWiredValue() {
    // We want to expose the value as a plain string
    //
    // In order not to interfere with the input we setTimeout
    // before advancing the focus
    requestAnimationFrame(() => this.onChange?.(this.inputs.value.join("")));
  }

  private getFormArray(size: number): FormArray {
    const arr = [];

    for (let i = 0; i < size; i++) {
      arr.push(new FormControl(""));
    }

    return new FormArray(arr);
  }

}
