import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-output-field',
  template: `
  <fieldset>
    <legend class="text-sm text-gray-300">{{heading}}</legend>
    <div class="font-bold">
      {{output + " °C"}}
    </div>
  </fieldset>
  `
})
export class OutputFieldComponent {
  @Input() heading: string = "";
  @Input() output: number = 0;

  constructor() { }

}
