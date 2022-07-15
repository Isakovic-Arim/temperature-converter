import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <form class="p-8 w-100 h-72 bg-white rounded-md drop-shadow-lg" action="">
      <app-input-field class="mr-3" [heading]="'Degrees'"></app-input-field>
      <app-input-dropdown class="mr-3" [heading]="'Type'" [values]="['Celsius', 'Fahrenheit']"></app-input-dropdown>
      <app-input-submit [text]="'Convert'"></app-input-submit>
      <app-output-field class="mt-5" [heading]="'Result'"></app-output-field>
    </form>
  `
})
export class FormComponent {

  constructor() { }

}
