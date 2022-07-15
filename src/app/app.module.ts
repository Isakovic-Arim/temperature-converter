import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { FormComponent } from './components/form/form.component';
import { InputDropdownComponent } from './components/input-dropdown/input-dropdown.component';
import { InputSubmitComponent } from './components/input-submit/input-submit.component';
import { OutputFieldComponent } from './components/output-field/output-field.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    FormComponent,
    InputDropdownComponent,
    InputSubmitComponent,
    OutputFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
