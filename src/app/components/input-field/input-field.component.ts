import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  template: `
  <fieldset class="inline-block">
    <legend class="text-sm text-gray-300">{{heading}}</legend>
    <input class="text-sm border-2 border-gray-200 rounded-md w-32 p-2" type="number" min="1" name="input" id="input" required>
  </fieldset>
  `
})
export class InputFieldComponent {
  @Input() heading: string = "";

  constructor() { }

}
