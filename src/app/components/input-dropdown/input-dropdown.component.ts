import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-dropdown',
  template: `
  <fieldset class="inline-block">
    <legend class="text-sm text-gray-300">{{heading}}</legend>
    <select class="text-sm w-44 border-2 border-gray-200 rounded-md p-2" name="" id="">
      <option class=" text-base border-2 rounded-sm" *ngFor="let value of values" value="{{value.toLowerCase()}}">{{value}}</option>
    </select>
  </fieldset>
  `
})
export class InputDropdownComponent implements OnInit {
  @Input() heading: string = "";
  @Input() values: string[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
