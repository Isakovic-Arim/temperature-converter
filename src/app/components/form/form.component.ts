import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <form class="p-8 w-100 h-72 bg-white rounded-md drop-shadow-lg">
      <fieldset class="inline-block mr-5">
        <legend class="text-sm text-gray-300">Degrees</legend>
        <input #input class="text-sm border-2 border-gray-200 rounded-md w-32 p-2" type="number" required>
      </fieldset>
      <fieldset class="inline-block mr-5">
        <legend class="text-sm text-gray-300">Type</legend>
        <select #selection class="text-sm w-44 border-2 border-gray-200 rounded-md p-2">
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
      </fieldset>
      <button (click)="onSubmit(); calculateResult(selection.value, input.value)" class="text-sm bg-blue-500 rounded-sm text-white px-3 py-2">Convert</button>
      <fieldset>
        <legend class="text-sm text-gray-300">Result</legend>
        <div class="font-bold">
          {{result + unit}}
        </div>
      </fieldset>
    </form>
  `
})

export class FormComponent {

  result: number = 0;
  unit: string = ' °C';

  constructor() { }

  onSubmit() {
    event?.preventDefault();
  }

  calculateResult(type: string, value: string) {

    if (type === 'celsius') {
      this.result = this.toFahrenheit(Number(value));
      this.unit = ' °F';
    } else {
      this.result = this.toCelsius(Number(value));
      this.unit = ' °C';
    }
  }

  toCelsius(value: number) {
    return (value - 32) * (5/9);
  }

  toFahrenheit(value: number) {
    return value * (9/5) + 32;
  }
}
