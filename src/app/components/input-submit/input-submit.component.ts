import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-submit',
  template: `
    <button class="text-sm bg-blue-500 rounded-md text-white px-3 py-2" type="submit">{{text}}</button>
  `
})
export class InputSubmitComponent {
  @Input() text: string = "";

  constructor() { }

}
